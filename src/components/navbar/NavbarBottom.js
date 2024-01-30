import React from "react";
import "./Navbar.css";

const DATA = [
    "Ektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksesuarla",
    "Go'zallik",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
    "Qurilish va ta'mirlash",
    "Avtotovarlar",
];

function NavbarBottom() {
    return (
        <div className="navbar__bottom container">
            {DATA?.map((el, ind) => (
                <p key={ind}>{el}</p>
            ))}
        </div>
    );
}

export default NavbarBottom;
