import React from 'react';
// import { Link } from 'gatsby';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ReactDOM } from 'react';

const Footer = () => {
<<<<<<< HEAD
return(
    <footer className="footer">
        <div className="footer__container">
        {/* //small container top wala css hoga is div me */}
           <div className='getStarted_container'>
           <div>
            <h3>Ready to join the community?</h3>
            <p> It is a long established fact that a reader will be distracted by the readable content.</p>
           </div>
           <div>
            <button>Get Started</button>
           </div>
           </div>
           {/* // get the app part done in this div */}
        <div>
            <div className="footer__container__left">
                <h3>Get The App</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                <div>
                <button style={{
                    position:" absolute",
                    width: "158px",
                    height: "45px",
                    background: "url(.png)"
                }}>App Store image</button>

                <button style={{
                display: "flex",
                width: "158px",
                    height: "45px",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    background: "url(.png)"
                }}> Google play button</button>
                </div>
=======
    return (
        <div className="w-screen h-[45vh] bg-bhc_green flex items-center justify-center flex-col space-y-5 relative">
            <div className="flex space-x-4 items-center">
                <img src="https://bhc-web-ker3.vercel.app/assets/img/logo.jpeg" alt="" className="w-16 h-16 shadow-2xl rounded-xl" />
                <span className="text-4xl font-semibold text-white font-playfair">Bride Health Care</span>
            </div>
            <span className="text-bhc_white tracking-wide w-[40%] text-center ">Providing remotely accessible diagnostic parameters for timely healthcare at every corner of the world.</span>
            <div className="flex space-x-5 relative">
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
>>>>>>> parent of d045fe0 (Update Footer.jsx)
            </div>

        </div>
     {/* links and social media icons in this div */}
<div className='footerbox_social'>
    <img src='./bhc logo.jpeg' alt='bhc logo'
    style={{
        width: "100px",
        height: "100px",
        display: "flex",
    }}/>
    <p>Bridge Healthcare
Private Limited</p>
    <div className='footerbox_social_icons'>
    <p>Lorem Ipsum is simply dummy text of the
printing andtypesetting industry.</p>
        <a href='#'>
            <FaFacebook/>
        </a>
        <a href='#'>
            <FaTwitter/>
        </a>
        <a href='#'>
            <FaLinkedinIn/>
        </a>
    </div>
    <div className='footerbox_social_links'>
        <h3>Our Links</h3>
        <ul>
            <li>About Us</li>
            <li>Find Doctor</li>
        </ul>
        <h3>Your Account</h3>
        <ul>
            <li>Login / Sign Up</li>
            <li>Contact</li>
        </ul>
    </div>
</div>
<div className='footerbox_bottom'>
    <p>© Copyright 2022 Laso Soins Accessibles.</p>
    <p>Terms of Use</p>
     <p>Privacy Policy</p>
</div>
        </div>
    </footer>
)
}
export default Footer;
