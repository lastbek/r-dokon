import { createBrowserRouter } from 'react-router-dom'
import { MarketMain } from '@/pages/market-main'


const router = createBrowserRouter([
    {
      path: '/',
      element: <MarketMain />,
    }
])

export default router  