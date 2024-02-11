import React from "react";
import SubHeader from "./SubHeader";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import { useLocation } from "react-router-dom";

function NavbarMain({ data }) {
    const { pathname } = useLocation();
    return pathname.includes("login") ? (
        <></>
    ) : (
        <>
            <SubHeader />
            <Navbar data={data} />
            <NavbarBottom />
        </>
    );
}

export default NavbarMain;
