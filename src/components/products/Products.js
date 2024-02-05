import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";
import { Link } from "react-router-dom";

function Products({ data, title }) {
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishes.value);

    const handleHeartClick = (event, el) => {
        event.preventDefault();
        event.stopPropagation();
        if (wishes.some((item) => item._id === el._id)) {
            dispatch(removeFromWishes(el));
        } else {
            dispatch(addToWishes(el));
        }
    };

    const handleCartClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className="container">
            <h2 className="product__heading">
                {title} <span>&#10095;</span>
            </h2>
            <div className="wrapper">
                {data?.map((el) => (
                    <Link
                        to={`/product/${el._id}`}
                        className="card"
                        key={el._id}
                    >
                        <div className="card__image">
                            <img src={el.url[0]} alt="rasm" />
                            {wishes?.some((item) => item._id === el._id) ? (
                                <div
                                    className="card__heart"
                                    onClick={(event) =>
                                        handleHeartClick(event, el)
                                    }
                                >
                                    <FaHeart />
                                </div>
                            ) : (
                                <div
                                    className="card__heart"
                                    onClick={(event) =>
                                        handleHeartClick(event, el)
                                    }
                                >
                                    <FaRegHeart />
                                </div>
                            )}
                        </div>
                        <div className="card__body">
                            <h3 className="card__title">{el.title}</h3>
                            <mark>{((el.price * 1.5) / 12).brm()} so'm</mark>
                            <div className="card__prices">
                                <div className="card__price-item">
                                    <del>{(el.price * 1.5)?.brm()}</del>
                                    <p>{el.price?.brm()} so'm</p>
                                </div>
                                <div
                                    className="card__cart"
                                    onClick={(event) => handleCartClick(event)}
                                >
                                    <IoCartOutline />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;
