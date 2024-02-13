import React from "react";
import "./Footer.css";
import {
    FaAppleAlt,
    FaDiscord,
    FaInstagram,
    FaGooglePlay,
    FaYoutube,
    FaFacebook,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();
    return pathname.includes("login") || pathname.includes("admin") ? (
        <></>
    ) : (
        <div className="footer container">
            <div className="footer__top">
                <div className="footer__item">
                    <h1>Biz haqimizda</h1>
                    <p>Topshirish punktlari</p>
                    <p>Vakansiyalar</p>
                </div>
                <div className="footer__item">
                    <h1>Foydalanuvchilarga</h1>
                    <p>Biz bilan bog'lanish</p>
                    <p>Savol - Javob</p>
                </div>
                <div className="footer__item">
                    <h1>Tadbirkorlarga</h1>
                    <p>Uzumda soting</p>
                    <p>Sotuvchi kabinetiga kirish</p>
                </div>
                <div className="footer__item">
                    <div>
                        <h1>Скачать приложение</h1>
                        <div className="footer__icons">
                            <div className="footer__icon">
                                <FaAppleAlt />
                                <p>AppleStore</p>
                            </div>
                            <div className="footer__icon">
                                <FaGooglePlay />
                                <p>Google Play</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Uzum в соцсетях</h1>
                        <div className="footer__grid">
                            <FaYoutube />
                            <FaFacebook />
                            <FaDiscord />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-info">
                    <p>Соглашение o конфиденциальности</p>
                    <p>Пользовательское соглашение</p>
                </div>
                <h5>
                    «2023© OOO «UZUM MARKET». ИНН 309376127. Bce права защищены»
                </h5>
            </div>
        </div>
    );
}

export default Footer;
