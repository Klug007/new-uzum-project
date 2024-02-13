import React from "react";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import Login from "./router/login/Login";
import Wishes from "./router/wishes/Wishes";
import Footer from "./components/footer/Footer";
import Singlepage from "./router/singlepage/Singlepage";
import { PRODUCTS } from "./static";
import "number-brm";
import Admin from "./router/admin/Admin";
import Auth from "./router/auth/Auth";

function App() {
    return (
        <div className="app">
            <NavbarMain data={PRODUCTS} />
            <Routes>
                <Route path="/" element={<Home data={PRODUCTS} />} />
                <Route path="/product/:id" element={<Singlepage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishes" element={<Wishes />} />
                <Route path="/" element={<Auth />}>
                    <Route path="/admin/*" element={<Admin />} />
                </Route>
                <Route path="*" element={<h1>Nothing can be found</h1>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
