import './ProductPreviewCard.scss'
import Cover from '@/shared/assets/images/marketCover.jpeg'

export const ProductPreviewCard = () => {
    return (
        <div className="product-preview-card">
            <div className='product-preview-card__cover'>
                <img src={Cover} alt="Cover image" />
                <div className='product-preview-card__cover__discount'>
                    <span>-10%</span>
                </div>
            </div>
            <div className='product-preview-card__info'>
                <div className='product-preview-card__content'>
                    <p className='product-preview-card__content_price-discount'>
                        <span>90,250 som</span>
                        <span>120,000</span>
                    </p>
                    <p className='product-preview-card__content_title'>Blood and Venom</p>
                </div>
                <button className='product-preview-card__button'>
                    Ulashish
                </button>
            </div>
        </div>
    )
}