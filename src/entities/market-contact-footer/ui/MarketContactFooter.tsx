import './MarketContactFooter.scss'
import { useTelegramWebApp } from '@/shared/hooks/useTelegramWebApp';

interface MarketContactFooterProps {
    contactTelegramLink: string;
    ownerTelegramChannelLink: string;
}

export const MarketContactFooter = ({ contactTelegramLink, ownerTelegramChannelLink }: MarketContactFooterProps) => {
    const tgWebApp = useTelegramWebApp();

    return (
        <div className="market-contact-footer">
            <button onClick={() => tgWebApp?.openTelegramLink(contactTelegramLink)}>Bog'lanish</button>
            <button onClick={() => tgWebApp?.openTelegramLink(ownerTelegramChannelLink)}>Kanalga qo'shilish</button>
            <p className='market-contact-footer__powered-by' onClick={() => tgWebApp?.openTelegramLink("https://t.me/@RaqamliDokonSotuvchiBot")}>@RaqamliDokonSotuvchiBot</p>
        </div>
    )
}