import { useCallback, useEffect, useState } from 'react'
import { useExchangeRate } from '@/hooks'
import { SendInput } from './SendInput'
import { ReceiveOutput } from './ReceiveOutput'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { ActionButtons } from './ActionButtons'

function Converter() {
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [receiveCurrency, setReceiveCurrency] = useState('EUR')
  const [sendAmount, setSendAmount] = useState('0')
  const [receiveAmount, setReceiveAmount] = useState('0')

  const { data: rateData, isLoading } = useExchangeRate(sendCurrency, receiveCurrency)

  const calculateReceive = useCallback((amount: string, rate: number | undefined) => {
    if (!rate || !amount) return '0'
    const result = (parseFloat(amount) * rate).toFixed(2)
    return result
  }, [])

  useEffect(() => {
    if (rateData?.rates?.[receiveCurrency]) {
      const rate = rateData.rates[receiveCurrency]
      setReceiveAmount(calculateReceive(sendAmount, rate))
    }
  }, [sendAmount, rateData, receiveCurrency, calculateReceive])

  const handleSwap = () => {
    setSendCurrency(receiveCurrency)
    setReceiveCurrency(sendCurrency)
    setSendAmount(receiveAmount)
  }

  return (
    <section className="converter-section">
      <h2 className="section-title">CHECK THE RATE</h2>

      <div className="converter-container">
        <SendInput
          sendAmount={sendAmount}
          sendCurrency={sendCurrency}
          onAmountChange={setSendAmount}
          onCurrencyChange={setSendCurrency}
        />

        <button className="swap-button" onClick={handleSwap} aria-label="Swap currencies">
          <img src="/images/icon-exchange-vertical.svg" alt="swap" />
        </button>

        <ReceiveOutput
          receiveAmount={receiveAmount}
          receiveCurrency={receiveCurrency}
          onCurrencyChange={setReceiveCurrency}
        />
      </div>

      <ExchangeRateDisplay
        sendCurrency={sendCurrency}
        receiveCurrency={receiveCurrency}
        rate={rateData?.rates?.[receiveCurrency]}
        isLoading={isLoading}
      />

      <ActionButtons />
    </section>
  )
}

export default Converter