import React from "react";
import "./Products.css";

function Products({ data }) {
    return (
        <div className="container">
            <h2 className="product__heading">
                Arzon narxlar <span>&#10095;</span>
            </h2>
            <div className="wrapper">
                {data?.map((el) => (
                    <div key={el._id} className="card">
                        <div className="card__image">
                            <img src={el.url[0]} alt="rasm" />
                        </div>
                        <div className="card__body">
                            <h3 className="card__title">{el.title}</h3>
                            <mark>{((el.price * 1.5) / 12).brm()}</mark>
                            <div className="card__prices">
                                <div>
                                    <del>{(el.price * 1.5)?.brm()}</del>
                                    <p>{el.price?.brm()} so'm</p>
                                </div>
                                <div className="card__cart-btn"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
