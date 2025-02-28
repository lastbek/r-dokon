import { MarketContactFooter } from "@/entities/market-contact-footer"
import { MarketInfo } from "@/entities/market-info"
import { ProductPreviewCard } from "@/entities/product-preview-card"

export const MarketMain = () => {
  return (
    <>
      <MarketInfo />
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
