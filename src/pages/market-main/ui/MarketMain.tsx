import { MarketContactFooter } from "@/entities/market-contact-footer"
import { MarketInfo } from "@/entities/market-info"
import { ProductPreviewCard } from "@/entities/product-preview-card"
import { ShareButton } from "@/entities/share-button"
import { useEffect } from "react"
import { useTelegramWebApp } from '@/shared/hooks/useTelegramWebApp';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query"
import { simpleLoginRequest } from "@/shared/api/simple-login"
import './MarketMain.scss'

export const MarketMain = () => {

  const navigate = useNavigate()
  const tgWebApp = useTelegramWebApp();

  console.log('Your telegram WebApp version:', tgWebApp?.initDataUnsafe?.start_param)
  useEffect(() => {
    tgWebApp?.BackButton.hide()

    // @ts-ignore
    if (!tgWebApp?.initDataUnsafe?.start_param) {
      navigate(`/not-found`)
    } else {
      const regex = /m(\d+)/;
      const match = tgWebApp?.initDataUnsafe?.start_param.match(regex);
      if (match) {
        mutate({
          telegramUserRawData: "user=%7B%22id%22%3A7018007084%2C%22first_name%22%3A%22Raqamli%20Do%27kon%22%2C%22last_name%22%3A%22Aloqa%22%2C%22username%22%3A%22RaqamliDokonAloqa%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=2623882326889792317&chat_type=private&auth_date=1719016618&hash=a3244910d2e5d9f23ec156c1c9a59b162485e44335030639187fe2e2eb3f05de",
          marketId: match[1]
       })
      }
    }
  }, [])

  const { mutate, isPending } = useMutation({
    mutationKey: ['simple-login'],
    mutationFn: simpleLoginRequest,
    onSuccess: (data) => {
      console.log(data)
    }
  })
  return (
    <div className="market-main">
      {isPending ? <p>Loading...</p> :
        <>
        <MarketInfo shareButton={<ShareButton />} />
        <div style={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          <ProductPreviewCard />
          <ProductPreviewCard />
          <ProductPreviewCard />
          <ProductPreviewCard />
        </div>
        <div style={{width: '100%', height: 180}}></div>
        <MarketContactFooter />
        </>
      }
    </div>
  )
}
