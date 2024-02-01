import React from "react";
import Empty from "../../components/empty/Empty";

function Wishes() {
    const empty = {
        image: "https://uzum.uz/static/img/hearts.cf414be.png",
        heading: "Sizga yoqqanini qoʻshingq",
        text: "Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi",
        btn: "Akkauntga kirish",
        link: "/login",
    };
    return (
        <div className="wishes container">
            <Empty data={empty} />
        </div>
    );
}

export default Wishes;
