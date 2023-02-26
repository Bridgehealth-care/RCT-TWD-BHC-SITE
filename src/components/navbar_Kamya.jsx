import React from "react";
import '../CSS/navbar.css';
import bhc_logo from '../assets/Assets3/bhc logo_1.png';
import bhc_text_img from '../assets/Assets3/Bridge_HealthCare_2.png';
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="navbar_container flex flex-row items-center place-content-around">
            <div className="nav_logo flex flex-row">
                <img src={bhc_logo} alt="BHC" />
                <img src={bhc_text_img} alt="Bridge Healthcare" />
            </div>

            <ul className="nav_links flex flex-row ml-18">
                <li className="link_items">Home</li>
                <li className="link_items">About Us</li>
                <li className="link_items">Our Services</li>
                <li className="link_items">Product</li>
                <li className="link_items">Team</li>
                <li className="link_items">Contact Us</li>
            </ul>

            <button className="login_button flex relative right-0">Log In
                <FaAngleDown className="mt-1.5 ml-2" />
            </button>
        </div>
    )
}

export default NavBar;
