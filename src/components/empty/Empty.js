import React from "react";
import "./Empty.css";

function Empty({ data }) {
    console.log(data);
    return (
        <div className="empty container">
            <div className="empty__image">
                <img src={data.image} alt="" />
            </div>
            <h1>{data.heading}</h1>
            <p>{data.text}</p>
            <button>
                <a href={data.link}>{data.btn}</a>
            </button>
        </div>
    );
}

export default Empty;
