import React from "react";
import "./Navbar.css";
import { IoMenu, IoSearch, IoHomeOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <NavLink to={"/"} className="navbar__logo">
                    {/* <img src="" alt="" /> */}
                    <h2>uzum market</h2>
                </NavLink>
                <button className="navbar__category-btn">
                    <IoMenu />
                    <span>Katalog</span>
                </button>
                <div className="navbar__search">
                    <input type="text" placeholder="Hidirish..." />
                    <button>
                        <IoSearch />
                    </button>
                </div>
                <div className="navbar__collection">
                    <NavLink to={"/"} className="navbar__item">
                        <IoHomeOutline />
                        <span>Bosh sahifa</span>
                    </NavLink>
                    <NavLink to={"/login"} className="navbar__item">
                        <FaRegUser />
                        <span>Kirish</span>
                    </NavLink>
                    <NavLink to={"/wishes"} className="navbar__item">
                        <FaRegHeart />
                        <span>Saralangan</span>
                    </NavLink>
                    <NavLink to={"/cart"} className="navbar__item">
                        <IoCartOutline />
                        <span>Savatcha</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
