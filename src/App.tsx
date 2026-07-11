import { FXChecker } from '@/components'
import { QueryClient, QueryClientProvider } from 'react-query'
const query = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={query}>
    <FXChecker />
    </QueryClientProvider>
  )
}

export default App
