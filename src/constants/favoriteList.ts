export interface FavoriteItem {
  id: string
  pair: string
  rate: string
  change: string
  isPositive: boolean
}

export const FAVORITE_LIST_DATA: FavoriteItem[] = [
  {
    id: '1',
    pair: 'USD → EUR',
    rate: '0.8530',
    change: '+0.16%',
    isPositive: true,
  },
  {
    id: '2',
    pair: 'GBP → USD',
    rate: '1.3575',
    change: '-0.22%',
    isPositive: false,
  },
  {
    id: '3',
    pair: 'USD → JPY',
    rate: '157.91',
    change: '+0.04%',
    isPositive: true,
  },
  {
    id: '4',
    pair: 'USD → BDT',
    rate: '122.92',
    change: '+0.18%',
    isPositive: false,
  },
  {
    id: '5',
    pair: 'EUR → GBP',
    rate: '0.8633',
    change: '+0.11%',
    isPositive: true,
  },
  {
    id: '6',
    pair: 'AUD → NZD',
    rate: '1.2217',
    change: '+0.23%',
    isPositive: true,
  },
  {
    id: '7',
    pair: 'USD → INR',
    rate: '94.910',
    change: '+0.05%',
    isPositive: true,
  },
  {
    id: '8',
    pair: 'EUR → CHF',
    rate: '1.0668',
    change: '-0.15%',
    isPositive: false,
  },
  {
    id: '9',
    pair: 'GBP → JPY',
    rate: '213.21',
    change: '+0.13%',
    isPositive: true,
  },
  {
    id: '10',
    pair: 'USD → TRY',
    rate: '38.642',
    change: '+0.54%',
    isPositive: true,
  },
]
