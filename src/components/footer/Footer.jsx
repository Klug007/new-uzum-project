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

function Footer() {
    return (
        <div className="footer container">
            <div className="footer__top">
                <div className="footer__item">
                    <h1>O нас</h1>
                    <p>Пункты выдачи</p>
                    <p>Вакансии</p>
                </div>
                <div className="footer__item">
                    <h1>Пользователям</h1>
                    <p>Пункты выдачи</p>
                    <p>Вопрос - Ответ</p>
                </div>
                <div className="footer__item">
                    <h1>Для предпринимателей</h1>
                    <p>Пункты выдачи</p>
                    <p>Вход для продавцов</p>
                </div>
                <div className="footer__item">
                    <div>
                        <h1>Скачать приложение</h1>
                        <div className="footer__icons">
                            <div className="icon">
                                <FaAppleAlt />
                                <p>AppleStore</p>
                            </div>
                            <div className="icon">
                                <FaGooglePlay />
                                <p>Google Play</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Uzum в соцсетях</h1>
                        <div className="grid">
                            <FaYoutube />
                            <FaFacebook />
                            <FaDiscord />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="row">
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
