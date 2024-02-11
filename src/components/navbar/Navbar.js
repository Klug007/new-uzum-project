import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoMenu, IoSearch, IoHomeOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";

function Navbar({ data }) {
    const [value, setValue] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        if (value.trim()) {
            let filterData = data.filter((el) =>
                el.title.toLowerCase().includes(value.toLowerCase().trim())
            );
            setSearchData(filterData);
        } else {
            setSearchData([]);
        }
    }, [value]);

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
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Qidirish..."
                        />
                        <button>
                            <IoSearch />
                        </button>
                        {value.trim() && (
                            <div className="nav__search-drop">
                                <p>Natija: {searchData.length}</p>
                                {searchData?.map((el) => (
                                    <Link
                                        to={`./product/${el._id}`}
                                        onClick={() => setValue("")}
                                    >
                                        <div
                                            key={el._id}
                                            className="nav__search-item"
                                        >
                                            <img
                                                src={el.url[0]}
                                                width={40}
                                                alt=""
                                            />
                                            <div>
                                                <p>{el.title}</p>
                                                <b>{el.price?.brm()} so'm</b>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                {!searchData.length && (
                                    <div className="nav__search-notfound">
                                        <img
                                            src="https://uzum.uz/static/img/penguin.a739ac8.png"
                                            alt=""
                                            width={150}
                                        />
                                        <p>Mahsulot Topilmadi</p>
                                    </div>
                                )}
                            </div>
                        )}
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
