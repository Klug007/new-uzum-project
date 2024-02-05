import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let loginUser = {
            name,
            password,
        };
        alert(`name: ${loginUser.name} password: ${loginUser.password}`);
        setName("");
        setPassword("");
    };
    return (
        <div className="login">
            <div className="login__form">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Tizimga Kirish</h2>
                    <label htmlFor="name">Фойдаланувчи Номи</label>
                    <input
                        value={name}
                        type="text"
                        name="name"
                        placeholder="Foydalanuvchi Nomi"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="parol">Parol</label>
                    <input
                        value={password}
                        type="password"
                        name="parol"
                        id=""
                        placeholder="Parol"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Kirish</button>
                </form>
                <p className="login__link">
                    <Link to="/">Assosiy sahifaga qaytish</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
