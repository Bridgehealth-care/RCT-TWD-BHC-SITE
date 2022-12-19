import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = ({navClr}) => {
    const navigate = useNavigate()
    const navbarNavigations = [
        {
            title: "Home",
            to: "/"
        },
        {
            title: "About",
            to: "/About"
        },
        {
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
            <div className="flex space-x-4">
                {
                    navbarNavigations.map((ele) => (
                        <span key={ele.to} onClick={() => navigate(`${ele.to}`)} className="cursor-pointer text-md hover:backdrop-blur-xl hover:bg-white/30 hover:text-white px-3 py-1 duration-300 ">
                            {ele.title}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar