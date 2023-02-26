import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import call from "../assets/call.gif"
import Loader from '../components/Loader';
import Header from '../components/Header'
import {MdWatchLater} from 'react-icons/md'


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
                load ? <Loader /> : <div >
                    <Navbar navClr={true} />
                    <div >
                    
                    <Header
                         h1 = "Contact Us"
                        p = "Home"
                        p1 = "Contact Us"
                    />

                    </div>
                        <div className="w-[70%] h-[20%] text-center flex flex-col">
                        <div className='getStarted_container'>
           <div>
       
            <p> Tell us how we can assist you and we will get in touch promptly</p>
           </div>
          
           </div>
                             <div className="flex space-x-8 w-1/2">
                                <div className="flex flex-col w-1/2 h-1/2 bg-slate-100 items-center space-y-5 p-4 rounded-2xl shadow-2xl">
                                    <div className="w-1/2 rounded-2xl overflow-hidden shadow-xl">
                                        
                                        <MdWatchLater
                                            className='w-full h-full bg-bhc_green text-white'
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2  items-center">
                                        <span className="font-semibold text-2xl">Opening Hours</span>
                                        <span className="font-light text-sm">Monday - Friday</span>
                                        <span className="font-light text-sm">09:00 AM - 05:00 PM</span>
                                      
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2 h-1/2 bg-slate-100 items-center space-y-5 p-4 rounded-2xl shadow-2xl">
                                    <div className="w-1/2 rounded-2xl overflow-hidden shadow-xl">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="flex flex-col space-y-2  items-center">
                                        <span className="font-semibold text-2xl">Contact Us</span>
                                        <span className="font-light text-lg tracking-wider"> +91 9914411392</span>
                                        <span className="font-light textsm">anmol@bridgehealth.care</span>
                                    </div>
                                </div>
                            </div>  
                         <div className='w-screen rounded-2xl overflow-hidden shadow-xl'>
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