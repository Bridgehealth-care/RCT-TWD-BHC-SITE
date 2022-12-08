import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import call from "../assets/call.gif"
import email from "../assets/email.gif"
import address from "../assets/address.gif"
import Loader from '../components/Loader';



const Contact = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);

    return (
        <>
            {
                load ? <Loader /> : <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <Navbar navClr={true} />
                    <div className='w-full min-h-screen flex flex-col items-center my-20'>
                        <div className="w-[70%] h-[20%] text-center flex flex-col">
                            <span className="text-6xl font-lora font-bold  text-[#130c47] text-center  tracking-wide">Get in touch with us for more information</span>
                            <span className="mt-4 text-lg text-[#130c47] font-medium">
                                if you need help or have a question we are here for you
                            </span>
                        </div>
                        <div className="w-[80%] h-[60%]   my-10 font-lora flex  space-x-9">
                            <div className="flex  w-1/2  bg-slate-100 items-center space-x-5 p-4 rounded-2xl shadow-2xl">
                                <div className="w-4/5 rounded-2xl overflow-hidden shadow-xl">
                                    <img src={address} alt="" />
                                </div>
                                <div className="flex flex-col space-y-4  items-center">
                                    <span className="font-semibold text-3xl">Our Address</span>
                                    <span className="font-light text-md text-center">HTIC, IIT Madras, Research park , Chennai, Tamilnadu, 600113</span>
                                </div>
                            </div>
                            <div className="flex space-x-8 w-1/2">
                                <div className="flex flex-col w-1/2 h-80 bg-slate-100 items-center space-y-5 p-4 rounded-2xl shadow-2xl">
                                    <div className="w-1/2 rounded-2xl overflow-hidden shadow-xl">
                                        <img src={email} alt="" />
                                    </div>
                                    <div className="flex flex-col space-y-2  items-center">
                                        <span className="font-semibold text-2xl">Email Us</span>
                                        <span className="font-light text-sm">info@bridgehealth.care</span>
                                        <span className="font-light text-sm">support@bridgehealth.care</span>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2 h-80 bg-slate-100 items-center space-y-5 p-4 rounded-2xl shadow-2xl">
                                    <div className="w-1/2 rounded-2xl overflow-hidden shadow-xl">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="flex flex-col space-y-2  items-center">
                                        <span className="font-semibold text-2xl">Call Us</span>
                                        <span className="font-light text-lg tracking-wider">9914411392</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248938.71092856416!2d80.06834097937028!3d12.864748526927643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7d6641728d%3A0xddfdb15c6538d927!2sIIT%20Madras%20Research%20Park!5e0!3m2!1sen!2sin!4v1670490403001!5m2!1sen!2sin" width="1200" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}
export default Contact