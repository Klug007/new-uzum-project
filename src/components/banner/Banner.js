import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner container">
            <img src={banner} alt="" />
        </div>
    );
}

export default Banner;
