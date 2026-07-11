export interface Currency {
  id: string
  code: string
  name: string
  flag: string
}

export const CURRENCIES: Currency[] = [
  { id: '1', code: 'USD', name: 'US Dollar', flag: '/images/flags/us.webp' },
  { id: '2', code: 'EUR', name: 'Euro', flag: '/images/flags/eu.webp' },
  { id: '3', code: 'GBP', name: 'British Pound', flag: '/images/flags/gb.webp' },
  { id: '4', code: 'JPY', name: 'Japanese Yen', flag: '/images/flags/jp.webp' },
  { id: '5', code: 'CHF', name: 'Swiss Franc', flag: '/images/flags/ch.webp' },
  { id: '6', code: 'CAD', name: 'Canadian Dollar', flag: '/images/flags/ca.webp' },
  { id: '7', code: 'AUD', name: 'Australian Dollar', flag: '/images/flags/au.webp' },
  { id: '8', code: 'INR', name: 'Indian Rupee', flag: '/images/flags/in.webp' },
  { id: '9', code: 'CNY', name: 'Chinese Yuan', flag: '/images/flags/cn.webp' },
  { id: '10', code: 'BDT', name: 'Bangladeshi Taka', flag: '/images/flags/bd.webp' },
]
