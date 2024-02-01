import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <div className="login__form">
                <form action="">
                    <h2>Tizimga Kirish</h2>
                    <label htmlFor="name">Фойдаланувчи Номи</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Foydalanuvchi Nomi"
                    />
                    <label htmlFor="parol">Parol</label>
                    <input
                        type="password"
                        name="parol"
                        id=""
                        placeholder="Parol"
                    />
                    <button>Kirish</button>
                </form>
                <p className="login__link">
                    <a href="/">Assosiy sahifaga qaytish</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
