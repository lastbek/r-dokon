import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './MarketProduct.scss';
import { Pagination } from 'swiper/modules';

export const MarketProduct = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // @ts-ignore
        window.Telegram.WebApp.BackButton.show();
        // @ts-ignore
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1));
    }, [navigate]);

    return (
        <div className="market-product">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="market-product__swiper"
            >
                <SwiperSlide className="market-product__slide">
                    <img
                        src="https://raqamli-dokon-mahsulotlar.s3.eu-north-1.amazonaws.com/product_3253_1739070294022.jpg"
                        alt="Product 1"
                        className="market-product__image"
                    />
                </SwiperSlide>
                <SwiperSlide className="market-product__slide">
                    <img
                        src="https://raqamli-dokon-mahsulotlar.s3.eu-north-1.amazonaws.com/product_1038356288_1738492836674.jpg"
                        alt="Product 2"
                        className="market-product__image"
                    />
                </SwiperSlide>
                <SwiperSlide className="market-product__slide">
                    <img
                        src="https://raqamli-dokon-mahsulotlar.s3.eu-north-1.amazonaws.com/product_304615896_1738492836474.jpg"
                        alt="Product 3"
                        className="market-product__image"
                    />
                </SwiperSlide>
                <SwiperSlide className="market-product__slide">
                    <img
                        src="https://raqamli-dokon-mahsulotlar.s3.eu-north-1.amazonaws.com/product_914935065_1738492836775.jpg"
                        alt="Product 4"
                        className="market-product__image"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="market-product__content">
                <p className="market-product__title">Blood and Venom</p>
                <div className="market-product__price">
                    <div className="market-product__price-discount">
                        <span className="market-product__current-price">135,000 som</span>
                        <span className="market-product__discount-rate">-10%</span>
                    </div>
                    <p className="market-product__old-price">150,000 som</p>
                    <div className="market-product__size-options">
                        <p className="market-product__size-title">O'lchamlari</p>
                        <div className="market-product__size-buttons">
                            <button className="market-product__size-button market-product__size-button--active">1 item</button>
                            <button className="market-product__size-button">2 + 1 FREE</button>
                            <button className="market-product__size-button">3 + 2 FREE</button>
                        </div>
                    </div>
                </div>
                <div className="market-product__description">
                    <p className="market-product__description_title">Mahsulot haqida</p>
                    <p className="market-product__description_text">
                        New formula – Now already pre-mixed
                        Enzyme-based cleaner – Tedious cleaning is a thing of the past!
                        Quickly and reliably removes dirt
                        Cleans in kitchen, bathroom, and WC
                        Also suitable for stubborn residue, lime stains, burnt-on grime, or carpet stains
                        Car seats, the headliner, the trim, and even paint and rims are reliably cleaned
                        Content per bottle: 500 ml
                        Made in Germany
                        Delivery includes: Bottle with spray head
                    </p>
                </div>
                <button className="market-product__feedback-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};
