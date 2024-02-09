import React from "react";
import "./CartProduct.css";
import { incCart, deCart, removeCart } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

function CartProduct({ carts }) {
    const dispatch = useDispatch();

    const SumOfProducts = () => {
        let sum = 0;
        carts?.map((el) => {
            sum = +el.price * el.quantity;
        });
        return sum;
    };

    const SendMessage = (e) => {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var phone_number = document.getElementById("phone_number").value;
        var location = document.getElementById("location").value;
        var message = document.getElementById("message").value;

        var my_text = `<b>Исм</b>: <i>${name}</i> %0A <b>Телефон Номер</b>: <i>${phone_number}</i> %0A <b>Адресс</b>: <i>${location}</i> %0A <b>Сообщение</b>: <i>${message}</i>`;

        var token = "6844770680:AAHJxjHu9JzEH9UjSCKqhAbM5ixhm6v2tes";
        var chat_id = -4140340215;

        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        console.log("Message sent successfully");
        document.getElementById("name").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
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
                        <form action="" onSubmit={(e) => SendMessage(e)}>
                            <input
                                type="text"
                                placeholder="To'liq ismingiz"
                                id="name"
                            />
                            <input
                                type="text"
                                placeholder="+998 00-000-00-00"
                                id="phone_number"
                            />
                            <input
                                type="text"
                                placeholder="Manzilingiz"
                                id="location"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Habar yo'llash"
                                id="message"
                            />
                            <div className="total">
                                <p>Umumiy narx:</p>
                                <b>{SumOfProducts().brm()} so'm</b>
                            </div>
                            <button type="submit" className="btn-reg">
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
