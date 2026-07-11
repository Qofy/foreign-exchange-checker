import { CurrencySelect } from '@/components'

interface SendInputProps {
  sendAmount: string
  sendCurrency: string
  onAmountChange: (amount: string) => void
  onCurrencyChange: (currency: string) => void
}

export function SendInput({ sendAmount, sendCurrency, onAmountChange, onCurrencyChange }: SendInputProps) {
  return (
    <div className="currency-input send">
      <label className="input-label">SEND</label>
      <div className="input-wrapper">
        <input
          type="number"
          className="amount-input"
          value={sendAmount}
          placeholder="0"
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <CurrencySelect value={sendCurrency} onChange={onCurrencyChange} />
      </div>
    </div>
  )
}
