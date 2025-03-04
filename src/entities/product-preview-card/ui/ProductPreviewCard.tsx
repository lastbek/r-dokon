import "./ProductPreviewCard.scss";
import Cover from "@/shared/assets/images/marketCover.jpeg";
import { useNavigate } from "react-router-dom"; // React Router
import { useProductStore } from "@/shared/stores/useProductStore";
import { calculateDiscountPercentage } from "@/shared/helpers/calculate-discount-percentage";
import { isNull } from "lodash";

export const ProductPreviewCard = ({ product }: { product: any }) => {
    const navigate = useNavigate();
    const setProduct = useProductStore((state: any) => state.setProduct)

    const handleCardClick = () => {
        setProduct(product);
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
                {!isNull(product.discountPrice) ? (
                    <div className="product-preview-card__cover__discount">
                        <span>-{calculateDiscountPercentage(product.price, product.discountPrice)}%</span>
                    </div>
                ) : null}
            </div>
            <div className="product-preview-card__info">
                <div className="product-preview-card__content">
                    {isNull(product.discountPrice) ? (
                        <p className="product-preview-card__content_price">{product?.price}</p>
                    ) : (
                        <p className="product-preview-card__content_price-discount">
                            <span>{product?.discountPrice}</span>
                            <span>{product?.price}</span>
                        </p>
                    )}
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
