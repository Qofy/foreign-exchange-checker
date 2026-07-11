import { CurrencySelect } from '@/components'

interface ReceiveOutputProps {
  receiveAmount: string
  receiveCurrency: string
  onCurrencyChange: (currency: string) => void
}

export function ReceiveOutput({ receiveAmount, receiveCurrency, onCurrencyChange }: ReceiveOutputProps) {
  return (
    <div className="currency-input receive">
      <label className="input-label">RECEIVE</label>
      <div className="input-wrapper">
        <input
          type="text"
          className="amount-output"
          value={receiveAmount}
          placeholder="0"
          readOnly
        />
        <CurrencySelect value={receiveCurrency} onChange={onCurrencyChange} />
      </div>
    </div>
  )
}
