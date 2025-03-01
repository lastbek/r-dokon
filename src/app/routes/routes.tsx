import { createBrowserRouter } from 'react-router-dom'
import { MarketMain } from '@/pages/market-main'
import { MarketProduct } from '@/pages/market-product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketMain />
  },
  {
    path: '/product/:id',
    element: <MarketProduct />
  }
])

export default router