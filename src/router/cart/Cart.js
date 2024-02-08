import React, { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import { useDispatch, useSelector } from "react-redux";
import { incCart, deCart } from "../../context/cartSlice";

function Cart() {
    const empty = {
        image: "https://uzum.uz/static/img/shopocat.490a4a1.png",
        heading: "Savatda hozircha mahsulot yo'q",
        text: "Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping",
        btn: "Bosh sahifa",
        link: "/",
    };
    const carts = useSelector((state) => state.carts.value);

    const dispatch = useDispatch();

    console.log(carts);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {carts.length ? (
                <div className="container">
                    {carts?.map((el) => (
                        <div key={el._id}>
                            <img src={el.url[0]} width={80} alt="" />
                            <p>{el.title}</p>
                            <button onClick={() => dispatch(deCart(el))}>
                                -
                            </button>
                            <button>{el.quantity}</button>
                            <button onClick={() => dispatch(incCart(el))}>
                                +
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <Empty data={empty} />
            )}
        </>
    );
}

export default Cart;
