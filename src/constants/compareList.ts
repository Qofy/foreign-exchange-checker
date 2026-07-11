export interface CompareItem {
  id: string
  flag: string
  code: string
  name: string
  amount: string
  rate: string
  isFavorited: boolean
}

export const COMPARE_LIST_DATA: CompareItem[] = [
  {
    id: '1',
    flag: '🇬🇧',
    code: 'GBP',
    name: 'British Pound',
    amount: '736.65',
    rate: '0.7366',
    isFavorited: false,
  },
  {
    id: '2',
    flag: '🇯🇵',
    code: 'JPY',
    name: 'Japanese Yen',
    amount: '157,910',
    rate: '157.91',
    isFavorited: true,
  },
  {
    id: '3',
    flag: '🇨🇭',
    code: 'CHF',
    name: 'Swiss Franc',
    amount: '909.80',
    rate: '0.9098',
    isFavorited: false,
  },
  {
    id: '4',
    flag: '🇨🇦',
    code: 'CAD',
    name: 'Canadian Dollar',
    amount: '1,381.50',
    rate: '1.3815',
    isFavorited: false,
  },
  {
    id: '5',
    flag: '🇦🇺',
    code: 'AUD',
    name: 'Australian Dollar',
    amount: '1,387.35',
    rate: '1.3874',
    isFavorited: false,
  },
  {
    id: '6',
    flag: '🇮🇳',
    code: 'INR',
    name: 'Indian Rupee',
    amount: '94,910.00',
    rate: '94.910',
    isFavorited: true,
  },
  {
    id: '7',
    flag: '🇨🇳',
    code: 'CNY',
    name: 'Chinese Yuan',
    amount: '7,210.00',
    rate: '7.2100',
    isFavorited: false,
  },
  {
    id: '8',
    flag: '🇧🇩',
    code: 'BDT',
    name: 'Bangladeshi Taka',
    amount: '122,920',
    rate: '122.92',
    isFavorited: true,
  },
]
