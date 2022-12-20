import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"
import Typed from "typed.js";
const Header = () => {
  const navigate = useNavigate()
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to Bridge Healthcare"],
      typeSpeed: 50,
      backSpeed: 20,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    }
  }, []);
  return (
    <div className="w-[120vw] h-[94vh] font-roboto  bg-bg_one rounded-bl-[50%] rounded-br-[50%] items-center  flex flex-col  relative -left-[10%]">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-12 text-white w-[50%] items-center p-10 mt-20 font-lora">
        <div>
          <span className="text-center text-5xl font-bold tracking-wide" ref={el}></span>
        </div>
        <p className="text-center text-lg">We are Bridge Healthcare, aiming to transform healthcare products so that everyone has access to high-quality healthcare. Our journey begins with good fate, where everyone has access to digital healthcare from anywhere and at any time. We warmly invite you to join us on our journey for a brighter future.</p>
        <button className="border-2 border-white px-4 py-2 hover:scale-110 duration-300 cursor-pointer active:scale-100 " onClick={() => navigate("/About")}>Know More</button>
      </div>
    </div>
  )
}

export default Header