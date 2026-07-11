import { useQuery } from 'react-query'
import { getExchangeRate } from '@/services/frankfurter'

export const useExchangeRate = (from: string, to: string) => {
  return useQuery(
    ['exchangeRate', from, to],
    () => getExchangeRate(from, to),
    {
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: 60000,
      enabled: !!from && !!to,
    }
  )
}
