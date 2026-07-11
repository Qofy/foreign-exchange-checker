import { useQuery } from 'react-query'
import { getHistoricalRates } from '@/services/frankfurter'

export const useHistoricalRates = (
  from: string,
  to: string,
  startDate: string,
  endDate: string
) => {
  return useQuery(
    ['historicalRates', from, to, startDate, endDate],
    () => getHistoricalRates(from, to, startDate, endDate),
    {
      staleTime: 0,
      cacheTime: 0,
      enabled: !!from && !!to && !!startDate && !!endDate,
    }
  )
}
