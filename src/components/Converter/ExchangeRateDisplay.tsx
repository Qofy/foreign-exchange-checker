interface ExchangeRateDisplayProps {
  sendCurrency: string
  receiveCurrency: string
  rate: number | undefined
  isLoading: boolean
}

export function ExchangeRateDisplay({ sendCurrency, receiveCurrency, rate, isLoading }: ExchangeRateDisplayProps) {
  const rateText = rate
    ? `1 ${sendCurrency} = ${rate.toFixed(4)} ${receiveCurrency}`
    : isLoading ? 'Loading....' : 'Unable to fetch rate'

  return (
    <div className="exchange-rate-info">
      <span className="rate-text">{rateText}</span>
    </div>
  )
}
