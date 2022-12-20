import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import newLogo from "../assets/newlogo.jpg"


const Footer = () => {
    return (
        <div className="w-screen h-[45vh] flex">
            <div className="w-1/3 h-full bg-bhc_green flex flex-col space-y-10 relative py-10 px-2 border-r-2 border-emerald-900">
                <div className="flex space-x-4 items-center justify-center">
                    <img src={newLogo} alt="" className="w-16 h-16 shadow-2xl rounded-xl" />
                    <span className="flex flex-col space-y-1">
                        <span className="text-4xl font-semibold text-white font-playfair">Bride Health Care</span>
                        <span className='text-bhc_white font-lora text-lg text-center'>NO DELAY IN HEALTH CARE</span>
                    </span>
                </div>
                <div className="flex space-x-5 relative justify-center">
                    <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
                        <TwitterIcon />
                    </span>
                    <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
                        <LinkedInIcon />
                    </span>
                    <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
                        <InstagramIcon />
                    </span>
                </div>
                <span className="text-center text-bhc_white  text-xs tracking-widest absolute bottom-3 left-10">
                    © Copyright Bridge Healthcare. All Rights ReservedDesigned by I&T
                </span>
            </div>
            <div className="bg-bhc_green flex flex-col flex-grow justify-center items-center space-y-10">
                <div className="flex flex-wrap gap-x-10 text-bhc_white ">
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Home</span>
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Products</span>
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Blogs</span>
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">About Us</span>
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Careers</span>
                    <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Contact Us</span>
                </div>
                <span className="text-bhc_white tracking-widest  text-center px-10  w-[60%] text-lg">Providing remotely accessible diagnostic parameters for timely healthcare at every corner of the world.</span>
                <span className="text-bhc_white tracking-widest  text-center   text-md font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Privacy & Cookie Policy</span>
            </div>
        </div>
    )
}
export default Footer
