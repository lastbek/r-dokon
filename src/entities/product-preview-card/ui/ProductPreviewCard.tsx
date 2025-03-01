import "./ProductPreviewCard.scss";
import Cover from "@/shared/assets/images/marketCover.jpeg";
import { useNavigate } from "react-router-dom"; // React Router

export const ProductPreviewCard = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/product/1"); // Change the route dynamically
    };

    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents card click from triggering navigation
        console.log("Share button clicked"); // Add share logic here
    };

    return (
        <div className="product-preview-card" onClick={handleCardClick}>
            <div className="product-preview-card__cover">
                <img src={Cover} alt="Cover image" />
                <div className="product-preview-card__cover__discount">
                    <span>-10%</span>
                </div>
            </div>
            <div className="product-preview-card__info">
                <div className="product-preview-card__content">
                    <p className="product-preview-card__content_price-discount">
                        <span>90,250 som</span>
                        <span>120,000</span>
                    </p>
                    <p className="product-preview-card__content_title">Blood and Venom</p>
                </div>
                <button
                    className="product-preview-card__button"
                    onClick={handleButtonClick}
                >
                    Ulashish
                </button>
            </div>
        </div>
    );
};
