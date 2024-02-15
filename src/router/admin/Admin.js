import React, { useState } from "react";
import CreateProduct from "./create-product/CreateProduct";
import ManageProduct from "./manage-product/ManageProduct";
import { NavLink, Route, Routes, Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import "./Admin.css";

function Admin() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="admin">
            <div className="admin__sidebar">
                {
                    open ? <IoMdClose onClick={() => setOpen(!open)} /> : <IoMenuOutline
                    onClick={() => setOpen(!open)}
                    className={open ? "close" : "open"}
                />
                }
                
                <div className={open ? `open` : "close"}>
                    <button
                        onClick={() => navigate("/")}
                        className="admin__go-home"
                    >
                        Go Home
                    </button>
                    <h2>Admin Panel</h2>
                    <NavLink to={"create-product"} className="admin__link">
                        Create Product
                    </NavLink>
                    <NavLink to={"manage-product"} className="admin__link">
                        Manage Product
                    </NavLink>
                </div>
            </div>
            <div className="admin__content">
                <Routes>
                    <Route path="/create-product" element={<CreateProduct />} />
                    <Route path="/manage-product" element={<ManageProduct />} />
                </Routes>
            </div>
        </div>
    );
}

export default Admin;
