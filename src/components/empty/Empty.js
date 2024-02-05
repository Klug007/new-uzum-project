import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";

function Empty({ data: { image, heading, text, link, btn } }) {
    return (
        <div className="empty">
            <div className="empty__image">
                <img src={image} alt="" />
            </div>
            <h1>{heading}</h1>
            <p>{text}</p>
            <button>
                <Link to={link}>{btn}</Link>
            </button>
        </div>
    );
}

export default Empty;
