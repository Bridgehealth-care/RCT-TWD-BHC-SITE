import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"
// import Typed from "typed.js";
const HomeHeader = () => {
  const navigate = useNavigate()
  const el = useRef(null);

  return (
    <div className="w-[120vw] h-[94vh] font-roboto   rounded-bl-[50%] rounded-br-[50%] items-center  flex flex-col  relative -left-[10%]">
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-12 text-white w-[50%]  p-10 mt-20 font-lora">
        <div>
          <span className=" text-5xl font-bold tracking-wide text-gray-900" ref={el}>No </span><br/>
          <span className=" text-5xl font-bold tracking-wide text-gray-900" ref={el}>Delay in </span><br/>
          <span className=" text-5xl font-bold tracking-wide" ref={el} style={{color:"#25554D"}}>Healthcare </span>
          <p className='text-gray-800'>Empowering people and the community for a health life</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button className='bg-black text-white tracking-wide w-20 h-10 rounded-lg py-px'>Read More</button>
        </div>
        <p className="text-center text-lg">We are Bridge Healthcare, aiming to transform healthcare products so that everyone has access to high-quality healthcare. Our journey begins with good fate, where everyone has access to digital healthcare from anywhere and at any time. We warmly invite you to join us on our journey for a brighter future.</p>
        <button className="border-2 border-white px-4 py-2 hover:scale-110 duration-300 cursor-pointer active:scale-100 " onClick={() => navigate("/About")}>Know More</button>
      </div>
    </div>
  )
}

export default HomeHeader