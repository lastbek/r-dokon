import { MarketContactFooter } from "@/entities/market-contact-footer"
import { MarketInfo } from "@/entities/market-info"
import { ProductPreviewCard } from "@/entities/product-preview-card"
import { ShareButton } from "@/entities/share-button"
import { useEffect } from "react"

export const MarketMain = () => {

  useEffect(() => {
    // @ts-ignore
    window.Telegram.WebApp.BackButton.hide()
}, [])
  return (
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
  )
}
