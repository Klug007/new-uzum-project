import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { ReactComponent as Flag } from "../../assets/uzb.svg";
import "./Navbar.css";

function SubHeader() {
    return (
        <div className="subheader">
            <div className="container subheader__wrapper">
                <div className="subheader__item">
                    <CiLocationOn />
                    <p>
                        Shahar:<span>Namangan</span>
                    </p>
                    <p>Topshirish puntlari</p>
                </div>
                <div className="subheader__item">
                    <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz! </p>
                </div>
                <div className="subheader__item">
                    <p>Savol-javoblar</p>
                    <p>Buyurtmalarim</p>
                    <Flag />
                    <p>O'zbekcha</p>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
