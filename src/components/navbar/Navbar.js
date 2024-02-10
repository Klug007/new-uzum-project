import React from "react";
import "./Navbar.css";
import { IoMenu, IoSearch, IoHomeOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";

function Navbar() {
    let carts = useSelector((state) => state.carts.value);

    return (
        <div className="navbar__wrapper">
            <div className="container">
                <div className="navbar">
                    <NavLink to={"/"} className="navbar__logo">
                        <Logo />
                    </NavLink>
                    <button className="navbar__category-btn">
                        <IoMenu />
                        <span>Katalog</span>
                    </button>
                    <div className="navbar__search">
                        <input type="text" placeholder="Qidirish..." />
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
                            <span>
                                Savatcha <sup>{carts.length}</sup>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
