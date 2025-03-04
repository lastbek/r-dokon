import "./ProductPreviewCard.scss";
import Cover from "@/shared/assets/images/marketCover.jpeg";
import { useNavigate } from "react-router-dom"; // React Router

export const ProductPreviewCard = ({ product }: { product: any }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`); // Change the route dynamically
    };

    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents card click from triggering navigation
        console.log("Share button clicked"); // Add share logic here
    };

    return (
        <div className="product-preview-card" onClick={handleCardClick}>
            <div className="product-preview-card__cover">
                <img src={product.images[0] ?? Cover} alt="Cover image" />
                <div className="product-preview-card__cover__discount">
                    <span>-10%</span>
                </div>
            </div>
            <div className="product-preview-card__info">
                <div className="product-preview-card__content">
                    <p className="product-preview-card__content_price-discount">
                        <span>{product?.discountPrice}</span>
                        <span>{product?.price}</span>
                    </p>
                    <p className="product-preview-card__content_title">{product?.title}</p>
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
