import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { useTelegramWebApp } from '@/shared/hooks/useTelegramWebApp';

function App() {
  // console.log(window.Telegram.WebApp.initDataUnsafe?.start_param)
  const tgWebApp = useTelegramWebApp();

  console.log('Your telegram WebApp version:', tgWebApp?.initDataUnsafe?.start_param)
  return (
    <RouterProvider router={router} />
  )
}

export default App