import React, { useState, useEffect , useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import career from "../assets/career.gif"
import CareerMarqueue from "../components/CareerMarqueue"

const Careers = () => {
    const ref = useRef()
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);
    return (
        <>
            {
                load ? <Loader /> : <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  font-lora">
                    <Navbar navClr={true} />
                    <div className="w-[80%] mx-auto h-[70vh] my-20 flex justify-center">
                        <div className="h-full w-[50%]">
                            <img src={career} alt="" className="h-full w-[80%]" />
                        </div>
                        <div className="h-full w-[40%] flex flex-col items-center justify-center">
                            <span className="text-7xl font-lora font-bold tracking-wide text-bhc_green">We are hiring</span>
                            <span className="mt-2 text-bhc_green text-6xl font-lora" >Join Our Team </span>
                        </div>
                    </div>
                    <div className="w-full h-[60vh]">
                        <CareerMarqueue/>
                    </div>
                    <div className="w-[80%] h-screen mx-auto">
                        <h1 className="  text-bhc_green text-5xl font-semibold font-lora text-center">Fill this form !</h1>
                        <div className="flex mt-10 w-full justify-center">
                            <div className="w-[40%] h-full  flex items-center justify-center bg-slate-200  rounded-xl py-16">
<img src="https://cryptoxpress.com/assets/images/feature-trade.png" alt="" />
                            </div>
                            <div className="w-1/2 h-full grid grid-cols-2 gap-9  pl-20 py-6">
                                <input type="text" placeholder='First Name' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Last Name' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Phone Number' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Email' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Country' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='State' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Role' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Linkedin Url' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Git Hub Url' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <input type="text" placeholder='Portfolio Url' className="outline-none px-4 py-2 font-lora tracking-wider border-2 rounded-md text-center border-gray-200 focus:border-bhc_green focus:shadow-xl"/>
                                <div className="mx-auto w-full">
                                <button className="px-4 py-2 bg-bhc_white text-bhc_green border-2 border-bhc_green font-lora tracking-wide font-semibold hover:bg-bhc_green hover:text-bhc_white duration-300 cursor-pointer hover:scale-105 w-full" onClick={()=>ref.current.click()}>Select Resume</button>
                                <input type='file' id="getFile" style={{display:"none"}} ref={ref}/>
                                </div>
                                <button className="px-4 py-2 bg-bhc_white text-bhc_green border-2 border-bhc_green font-lora tracking-wide font-semibold hover:bg-bhc_green hover:text-bhc_white duration-300 cursor-pointer hover:scale-105 ">Submit</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}
export default Careers