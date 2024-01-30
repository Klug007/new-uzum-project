import React from "react";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Wishes from "./router/wishes/Wishes";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="app">
            <NavbarMain />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishes" element={<Wishes />} />
                <Route path="*" element={<h1>Nothing can be found</h1>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
