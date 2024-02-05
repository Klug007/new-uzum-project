import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";

function Wishes() {
    const empty = {
        image: "https://uzum.uz/static/img/hearts.cf414be.png",
        heading: "Sizga yoqqanini qoʻshingq",
        text: "Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi",
        btn: "Akkauntga kirish",
        link: "/login",
    };
    let wishes = useSelector((state) => state.wishes.value);
    console.log(wishes);
    return (
        <div className="wishes">
            {wishes.length ? (
                <Products title='Sevimlilar' data={wishes} />
            ) : (
                <Empty data={empty} />
            )}
        </div>
    );
}

export default Wishes;
