import { Link } from 'react-router-dom'
import './MarketContactFooter.scss'

export const MarketContactFooter = () => {
    return (
        <div className="market-contact-footer">
            <button>Bog'lanish</button>
            <button>Kanalga qo'shilish</button>
            <Link to="https://t.me/@RaqamliDokonSotuvchiBot">@RaqamliDokonSotuvchiBot</Link>
        </div>
    )
}