import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";
import { incCart } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ title, image }) =>
    window.screen.width > 645 ? (
        <div className="custom-toast">
            <div className="toast-image">
                <img src={image} alt="" />
            </div>
            <div className="toast-item">
                <h4>Mahsulot savatga qo'shildi</h4>
                <p>{title}</p>
            </div>
            <Link to={"./cart"} className="toast-link">
                <button>Savatga o'tish</button>
            </Link>
        </div>
    ) : (
        <div className="custom-toast">
            <div className="toast-item">
                <h4>Mahsulot savatga qo'shildi</h4>
            </div>
            <Link to={"./cart"} className="toast-link">
                <button>Savatga o'tish</button>
            </Link>
        </div>
    );

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

    const handleCartClick = (event, el) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(incCart(el));
        toast.success(<CustomToast title={el.title} image={el.url[0]} />, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            style:
                window.screen.width > 645
                    ? {
                          height: "100px",
                          width: "600px",
                          left: "-150px",
                      }
                    : {
                          height: "100px",
                      },
        });
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
                                    <FaHeart style={{ color: "#7000ff" }} />
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
                            <h3 title={el.title} className="card__title">
                                {el.title}
                            </h3>
                            <mark>{((el.price * 1.5) / 12).brm()} so'm</mark>
                            <div className="card__prices">
                                <div className="card__price-item">
                                    <del>{(el.price * 1.5)?.brm()}</del>
                                    <p>{el.price?.brm()} so'm</p>
                                </div>
                                <div
                                    className="card__cart"
                                    onClick={(event) => {
                                        handleCartClick(event, el);
                                    }}
                                >
                                    <IoCartOutline />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <ToastContainer icon={false} />
        </div>
    );
}

export default Products;
