import React from "react";
import CreateProduct from "./create-product/CreateProduct";
import ManageProduct from "./manage-product/ManageProduct";
import { NavLink, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
    const navigate = useNavigate()
    return (
        <div className="admin">
            <div className="admin__sidebar">
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
