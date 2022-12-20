import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import newLogo from "../assets/newlogo.jpg"
import Marquee from "react-fast-marquee";


const Navbar = ({ navClr }) => {
    const navigate = useNavigate()
    const navbarNavigations = [
        {
            title: "Home",
            to: "/"
        },
        // {
        //     title: "Products",
        //     to: "/Products"
        // }
        , {
            title: "Blogs",
            to: "/Blogs"
        }, {
            title: "About Us",
            to: "/About"
        },
        {
            title: "Carrers",
            to: "/Carrers"
        }, {
            title: "Contact Us",
            to: "/Contact-Us"
        },
    ]
    return (
        <div className=" w-full h-16  flex justify-between px-20 items-center text-white" style={navClr &&  {backgroundColor : "#30534d" }}>
            <div className="flex items-center space-x-4 cursor-pointer" onClick={()=>navigate("/")}>
                <img src="https://bhc-web-ker3.vercel.app/assets/img/logo.jpeg" alt="" className="w-10 h-10" />
                <span className="text-2xl font-semibold tracking-wide font-playfair">Bridge Health Care</span>
            </div>
            <div className="w-full h-20  flex justify-between pl-20 pr-7  items-center text-white " style={navClr && { backgroundColor: "#30534d" }}>
                <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
                    <img src={newLogo} alt="" className="w-12 h-12" />
                    <div className="flex flex-col ">
                        <span className="text-3xl font-semibold tracking-wide font-lora">Bridge Health Care</span>
                        <span className="text-xs font-sans tracking-widest">
                            Empowering community for a healthy life
                        </span>
                    </div>
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
            </div>
            
        </div>
    )
}

export default Navbar
