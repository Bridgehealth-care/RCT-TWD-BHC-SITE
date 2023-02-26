import React from "react";
import '../CSS/header.css';
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header_container flex">
            <div className="header_text flex flex-col justify-center ml-32 text-white">
                <h1 className="text-4xl font-bold leading-10 tracking-widest">About Us</h1>
                <h2 className="text-xl font-normal leading-10 tracking-wider flex flex-row">Home <FaAngleRight className="mt-3 ml-3 mr-3" /> About Us</h2>
            </div>
        </div>
    )
}

export default Header;
