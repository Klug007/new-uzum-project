import React from "react";
import "./CartProduct.css";
import { incCart, deCart, removeCart } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

function CartProduct({ carts }) {
    const dispatch = useDispatch();

    console.log(carts);

    const SumOfProducts = () => {
        let sum;
        carts?.map((el) => {
            sum =+ el.price * el.quantity;
        });
        return sum;
    };

    return (
        <div className="container h-70">
            <div className="cart__wrapper">
                <div className="cart__products">
                    {carts?.map((el) => (
                        <div key={el.title} className="cart__item">
                            <Link
                                to={`/product/${el._id}`}
                                className="cart__item-left"
                            >
                                <img src={el.url} alt={el.title} />
                                <div>
                                    <h4>{el.title}</h4>
                                    <p>Kategoriya: {el.category}</p>
                                </div>
                            </Link>
                            <div className="cart__item-right">
                                <div className="cart__item-btns">
                                    <button
                                        disabled={el.quantity === 1}
                                        onClick={() => dispatch(deCart(el))}
                                    >
                                        -
                                    </button>
                                    <button>{el.quantity}</button>
                                    <button
                                        onClick={() => dispatch(incCart(el))}
                                    >
                                        +
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="cart__trash-btn"
                                        onClick={() => dispatch(removeCart(el))}
                                    >
                                        <FaRegTrashAlt />
                                    </button>
                                    <h3>{el.price?.brm()} so'm</h3>
                                    <p>
                                        {" "}
                                        {(el.price * el.quantity)?.brm()} so'm
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart__register">
                    <div className="input__reg">
                        <h3>Ma'lumotlarni to'ldiring:</h3>
                        <form action="">
                            <input type="text" placeholder="To'liq ismingiz" />
                            <input
                                type="text"
                                placeholder="+998 00-000-00-00"
                            />
                            <input type="text" placeholder="Manzilingiz" />
                            <input
                                required
                                type="text"
                                placeholder="Habar yo'llash"
                            />
                            <div className="total">
                                <p>Umumiy narx:</p>
                                <b>{SumOfProducts().brm()} so'm</b>
                            </div>
                            <button className="btn-reg">
                                Rasmiylashtirishga o'tish
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
