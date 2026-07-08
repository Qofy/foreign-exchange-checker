export interface TickerItem {
  id: string
  currencyPair: string
  rate: number
  change: string
  isPositive: boolean
}

export const LIVE_MARKET_DATA: TickerItem[] = [
  {
    id: '1',
    currencyPair: 'USD/JPY',
    rate: 157.91,
    change: '-8.14%',
    isPositive: false,
  },
  {
    id: '2',
    currencyPair: 'USD/JPY',
    rate: 157.91,
    change: '+0.04%',
    isPositive: true,
  },
  {
    id: '3',
    currencyPair: 'GBP/USD',
    rate: 1.3575,
    change: '-8.22%',
    isPositive: false,
  },
  {
    id: '4',
    currencyPair: 'USD/CHF',
    rate: 0.9098,
    change: '+0.13%',
    isPositive: true,
  },
  {
    id: '5',
    currencyPair: 'EUR/GBP',
    rate: 0.8633,
    change: '+0.11%',
    isPositive: true,
  },
  {
    id: '6',
    currencyPair: 'AUD/USD',
    rate: 0.7208,
    change: '+0.08%',
    isPositive: true,
  },
  {
    id: '7',
    currencyPair: 'USD/CAD',
    rate: 1.3815,
    change: '+0.04%',
    isPositive: true,
  },
]
