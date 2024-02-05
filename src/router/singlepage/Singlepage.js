import React, { useEffect, useState } from "react";
import "./Singlepage.css";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../static/index";

function Singlepage() {
    const [product, setProduct] = useState([]);
    let paramId = useParams().id;

    useEffect(() => {
        var singleItem = PRODUCTS.find((product) => product._id === paramId);
        setProduct(singleItem);
    }, [paramId]);

    return (
        <div className="singlepage container">
            <div className="singlepage__image">
                <div className="img__items">
                    <img src={product.url} alt="" />
                    <img src={product.url} alt="" />
                    <img src={product.url} alt="" />
                    <img src={product.url} alt="" />
                </div>
                <div className="img__main">
                    <img src={product.url} alt="" />
                </div>
            </div>
            <div className="singlepage__text">
                <div className="singlepage__rating">
                    <div className="singlepage__item">
                        <p className="singlepage__star">
                            <img src={star} alt="" />
                            5.0 (550 baho)
                        </p>
                        <p>Более 12000 заказов</p>
                    </div>
                    <div className="singlepage__item">
                        <img src={heart} alt="" />
                        <p> B желания</p>
                    </div>
                </div>
                <h1>{product.title}</h1>
                <div className="singelpage__seller">
                    <div className="seller__item">
                        <p>Продавец:</p>
                        <p>Есинбек Тиллабоев</p>
                    </div>
                    <div className="seller__item">
                        <p>Доставка:</p>
                        <p>1 день, бесплатно</p>
                    </div>
                </div>
                <div className="singlepage__amount">
                    <p>Количество:</p>
                    <div>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </div>
                <div className="singlepage__price">
                    <p>Цена:</p>
                    <div>
                        <p style={{ fontSize: "24px" }}>
                            {product.price * 12} сум
                        </p>
                        <p style={{ color: "grey" }}>
                            <del>{product.price * 15} сум</del>
                        </p>
                    </div>
                </div>

                <div className="singlepage__credit">
                    <p>
                        <mark>От {Math.floor(product.price / 2)} сум/мес </mark>
                        в рассрочку
                    </p>
                </div>

                <div className="singlepage__button">
                    <button>Добавить в корзину</button>
                    <button>Купить в 1 клик</button>
                </div>

                <div className="singlepage__desc">
                    <p>Кратко о товаре:</p>
                    <li>{product.desc}</li>
                </div>
            </div>
        </div>
    );
}

export default Singlepage;
