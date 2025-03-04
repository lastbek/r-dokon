import type { ReactElement } from 'react'
import MarketCover from "@/shared/assets/images/marketCover.jpeg"
import './MarketInfo.scss'

interface MarketInfoProps {
    data: any
    shareButton: ReactElement; 
}

export const MarketInfo = ({ data, shareButton }: MarketInfoProps) => {
    return (
        <div className="market-info">
            <div className="market-info__cover">
                <img src={data?.image ?? MarketCover} alt="" />
                {shareButton}
            </div>
            <div className="market-info__header">
                <p className="market-info__header_title">
                    <span>{data?.title}</span>
                    <span className="market-info__header_title__icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.3335 3.66659H7.66683V4.99992H6.3335V3.66659ZM6.3335 6.33325H7.66683V10.3333H6.3335V6.33325ZM7.00016 0.333252C3.32016 0.333252 0.333496 3.31992 0.333496 6.99992C0.333496 10.6799 3.32016 13.6666 7.00016 13.6666C10.6802 13.6666 13.6668 10.6799 13.6668 6.99992C13.6668 3.31992 10.6802 0.333252 7.00016 0.333252ZM7.00016 12.3333C4.06016 12.3333 1.66683 9.93992 1.66683 6.99992C1.66683 4.05992 4.06016 1.66659 7.00016 1.66659C9.94016 1.66659 12.3335 4.05992 12.3335 6.99992C12.3335 9.93992 9.94016 12.3333 7.00016 12.3333Z"/>
                        </svg>
                    </span>
                </p>
                <p className="market-info__header_desc">
                    {data?.description}
                </p>
            </div>
        </div>
    )
}