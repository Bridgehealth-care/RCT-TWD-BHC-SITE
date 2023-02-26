import React from "react";
import '../CSS/header.css';
import { FaAngleRight } from "react-icons/fa";

const Header = (props) => {
    return (
        <div className="header_container flex">
            <div className="header_text flex flex-col justify-center ml-32 text-white">
                <h1 className="text-4xl font-bold leading-10 tracking-widest">{props.h1}</h1>
                <h2 className="text-xl font-normal leading-10 tracking-wider flex flex-row">{props.p} <FaAngleRight className="mt-3 ml-3 mr-3" /> {props.p1}</h2>
            </div>
        </div>
    )
}

export default Header;