import axios from 'axios'

const API_BASE_URL = 'api'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

export const getExchangeRate = async (from: string, to: string) => {
  try {
    const response = await axiosInstance.get('/latest', {
      params: {
        from,
        to,
      },
    })
    // console.log("-------------------Data--------------------------",response.data.amount)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getHistoricalRates = async (
  from: string,
  to: string,
  startDate: string,
  endDate: string
) => {
  try {
    const response = await axiosInstance.get(`/historical`, {
      params: {
        from,
        to,
        start_date: startDate,
        end_date: endDate,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
