import React, { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import { useDispatch, useSelector } from "react-redux";
import { incCart, deCart } from "../../context/cartSlice";
import CartProduct from "../../components/cart-product/CartProduct";

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {carts.length ? (
                <CartProduct carts={carts} />
            ) : (
                <Empty data={empty} />
            )}
        </>
    );
}

export default Cart;
