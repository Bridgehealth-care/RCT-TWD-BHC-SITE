import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import newLogo from "../assets/newlogo.jpg"
import '../CSS/navbar.css'
import { FaAngleDown } from "react-icons/fa";
import bhc_logo from '../assets/Assets3/bhc logo_1.png';
import bhc_text_img from '../assets/Assets3/Bridge_HealthCare_2.png';
// import Marquee from "react-fast-marquee";


const Navbar = ({ navClr }) => {
    const navigate = useNavigate()
    const navbarNavigations = [
        {
            title: "Home",
            to: "/"
        },
       
        // , {
        //     title: "Blogs",
        //     to: "/Blogs"
        // }, 
        {
            title: "About Us",
            to: "/About"
        },
        
        {
            title: "Our Services",
            to: "/Ourservices"
        },
     
        {
            title: "Product",
            to: "/products"
        },
        {
            title: "Our Team",
            to: "/Team"
         },

         {
            title: "Contact Us",
            to: "/Contact-Us"
        },
    ]
    const login = ['Patient','Provider']
    return (
        <div className="flex w-screen flex-col">
            <div className="  overflow-hidden   cursor-pointer " style={{backgroundColor:"#fffff",
            color:"black"}}>
               <div className="nav_logo flex flex-row">
             
            </div>
            </div>
            <div className="w-full h-20  flex justify-between pl-20 pr-7  items-center text-black bg-white ">
                <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
                <img src={bhc_logo} alt="BHC" />
                <img src={bhc_text_img} alt="Bridge Healthcare" />
                   
                </div>
                <div className="flex space-x-2">
                    {
                        navbarNavigations.map((ele) => (
                            <span key={ele.to} onClick={() => navigate(`${ele.to}`)} className="cursor-pointer text-md hover:backdrop-blur-xl hover:bg-white/30 hover:text-white px-3 py-1 duration-300 ">
                                {ele.title}
                            </span>
                        ))
                    }
                </div>
            <div className='relative'>
            <button className="login_button flex relative right-0">Log In
                <FaAngleDown className="mt-1.5 ml-2" />
            </button>
            <div className='bg-grey p-4 w-52 shadow-lg absolute'>
            <ul>
                {
                login.map((menu)=>(
                    <li className= "p-2 cursor-pointer text-lg" key={menu}><menu/> </li>
                ))
                }
            </ul>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Navbar