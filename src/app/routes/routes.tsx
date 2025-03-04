import { createBrowserRouter } from 'react-router-dom'
import { MarketMain } from '@/pages/market-main'
import { MarketProduct } from '@/pages/market-product'
import { NotFound } from '@/pages/not-found'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MarketMain />
  },
  {
    path: '/product/:id',
    element: <MarketProduct />
  }, 
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/not-found',
    element: <NotFound />
  }
])

export default routes