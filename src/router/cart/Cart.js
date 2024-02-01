import React from "react";
import Empty from "../../components/empty/Empty";

function Cart() {
    const empty = {
        image: "https://uzum.uz/static/img/shopocat.490a4a1.png",
        heading: "Savatda hozircha mahsulot yo'q",
        text: "Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping",
        btn: "Bosh sahifa",
        link: "/",
    };
    return (
        <div className="cart">
            <Empty data={empty} />
        </div>
    );
}

export default Cart;
