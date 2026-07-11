import { useCallback, useEffect } from 'react'
import { useExchangeRate } from '@/hooks'
import { SendInput } from './SendInput'
import { ReceiveOutput } from './ReceiveOutput'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { ActionButtons } from './ActionButtons'

interface ConverterProps {
  sendAmount: string
  receiveAmount: string
  sendCurrency: string
  receiveCurrency: string
  onSendAmountChange: (amount: string) => void
  onReceiveAmountChange: (amount: string) => void
  onSendCurrencyChange: (currency: string) => void
  onReceiveCurrencyChange: (currency: string) => void
}

function Converter({
  sendAmount,
  receiveAmount,
  sendCurrency,
  receiveCurrency,
  onSendAmountChange,
  onReceiveAmountChange,
  onSendCurrencyChange,
  onReceiveCurrencyChange,
}: ConverterProps) {

  const { data: rateData, isLoading } = useExchangeRate(sendCurrency, receiveCurrency)

  const calculateReceive = useCallback((amount: string, rate: number | undefined) => {
    if (!rate || !amount) return '0'
    const result = (parseFloat(amount) * rate).toFixed(2)
    return result
  }, [])

  useEffect(() => {
    if (rateData?.rates?.[receiveCurrency]) {
      const rate = rateData.rates[receiveCurrency]
      onReceiveAmountChange(calculateReceive(sendAmount, rate))
    }
  }, [sendAmount, rateData, receiveCurrency, calculateReceive, onReceiveAmountChange])

  const handleSwap = () => {
    onSendCurrencyChange(receiveCurrency)
    onReceiveCurrencyChange(sendCurrency)
    onSendAmountChange(receiveAmount)
  }

  return (
    <section className="converter-section">
      <h2 className="section-title">CHECK THE RATE</h2>

      <div className="converter-container">
        <SendInput
          sendAmount={sendAmount}
          sendCurrency={sendCurrency}
          onAmountChange={onSendAmountChange}
          onCurrencyChange={onSendCurrencyChange}
        />

        <button className="swap-button" onClick={handleSwap} aria-label="Swap currencies">
          <img src="/images/icon-exchange-vertical.svg" alt="swap" />
        </button>

        <ReceiveOutput
          receiveAmount={receiveAmount}
          receiveCurrency={receiveCurrency}
          onCurrencyChange={onReceiveCurrencyChange}
        />
      </div>
      <div className='align'>

      <ExchangeRateDisplay
        sendCurrency={sendCurrency}
        receiveCurrency={receiveCurrency}
        rate={rateData?.rates?.[receiveCurrency]}
        isLoading={isLoading}
      />

      <ActionButtons />
      </div>

    </section>
  )
}

export default Converter