export interface Currency {
  id: string
  code: string
  name: string
  flag: string
  isPopular:boolean
}

export const CURRENCIES: Currency[] = [
  // Popular Global Currencies
  { id: '1', code: 'USD', name: 'US Dollar', flag: '/images/flags/us.webp', isPopular:true },
  { id: '2', code: 'EUR', name: 'Euro', flag: '/images/flags/eu.webp', isPopular:true },
  { id: '3', code: 'GBP', name: 'British Pound', flag: '/images/flags/gb.webp', isPopular:true },
  { id: '4', code: 'JPY', name: 'Japanese Yen', flag: '/images/flags/jp.webp', isPopular:false },
  { id: '5', code: 'CHF', name: 'Swiss Franc', flag: '/images/flags/ch.webp',isPopular:true },
  { id: '6', code: 'CAD', name: 'Canadian Dollar', flag: '/images/flags/ca.webp', isPopular:false },
  { id: '7', code: 'AUD', name: 'Australian Dollar', flag: '/images/flags/au.webp', isPopular:true },
  { id: '8', code: 'INR', name: 'Indian Rupee', flag: '/images/flags/in.webp',isPopular:true },
  { id: '9', code: 'CNY', name: 'Chinese Yuan', flag: '/images/flags/cn.webp', isPopular:false },
  { id: '10', code: 'BDT', name: 'Bangladeshi Taka', flag: '/images/flags/bd.webp', isPopular:false },

  // African Countries
  { id: '21', code: 'EGP', name: 'Egyptian Pound', flag: '/images/flags/eg.webp', isPopular:true },
  { id: '28', code: 'KES', name: 'Kenyan Shilling', flag: '/images/flags/ke.webp', isPopular:true },
  { id: '36', code: 'MAD', name: 'Moroccan Dirham', flag: '/images/flags/ma.webp', isPopular:false },
  { id: '39', code: 'NGN', name: 'Nigerian Naira', flag: '/images/flags/ng.webp', isPopular:true },
  { id: '40', code: 'RWF', name: 'Rwandan Franc', flag: '/images/flags/rw.webp', isPopular:false },
  { id: '45', code: 'ZAR', name: 'South African Rand', flag: '/images/flags/za.webp', isPopular:true },
]
