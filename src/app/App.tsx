import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/config/query-client'

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
}

export default App