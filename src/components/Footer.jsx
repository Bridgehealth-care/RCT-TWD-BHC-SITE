// import React from 'react'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import newLogo from "../assets/newlogo.jpg"


// const Footer = () => {
//     return (
//         <div className="w-screen h-[45vh] flex">
//             <div className="w-1/3 h-full bg-bhc_green flex flex-col space-y-10 relative py-10 px-2 border-r-2 border-emerald-900">
//                 <div className="flex space-x-4 items-center justify-center">
//                     <img src={newLogo} alt="" className="w-16 h-16 shadow-2xl rounded-xl" />
//                     <span className="flex flex-col space-y-1">
//                         <span className="text-4xl font-semibold text-white font-playfair">Bride Health Care</span>
//                         <span className='text-bhc_white font-lora text-lg text-center'>NO DELAY IN HEALTH CARE</span>
//                     </span>
//                 </div>
//                 <div className="flex space-x-5 relative justify-center">
//                     <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
//                         <TwitterIcon />
//                     </span>
//                     <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
//                         <LinkedInIcon />
//                     </span>
//                     <span className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green">
//                         <InstagramIcon />
//                     </span>
//                 </div>
//                 <span className="text-center text-bhc_white  text-xs tracking-widest absolute bottom-3 left-10">
//                     © Copyright Bridge Healthcare. All Rights ReservedDesigned by I&T
//                 </span>
//             </div>
//             <div className="bg-bhc_green flex flex-col flex-grow justify-center items-center space-y-10">
//                 <div className="flex flex-wrap gap-x-10 text-bhc_white ">
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Home</span>
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Products</span>
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Blogs</span>
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">About Us</span>
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Careers</span>
//                     <span className="text-2xl font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Contact Us</span>
//                 </div>
//                 <span className="text-bhc_white tracking-widest  text-center px-10  w-[60%] text-lg">Providing remotely accessible diagnostic parameters for timely healthcare at every corner of the world.</span>
//                 <span className="text-bhc_white tracking-widest  text-center   text-md font-lora duration-300 hover:text-bhc_green hover:bg-bhc_white px-2 py-1 cursor-pointer">Privacy & Cookie Policy</span>
//             </div>
//         </div>
//     )
// }
// export default Footer






// ------------------------- Kamya and Laraib Work -----------------------------


import React from 'react';
// import { Link } from 'gatsby';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ReactDOM } from 'react';
import '../CSS/footer.css';
import appStore from '../assets/Assets3/AppStore.png';
import googleStore from '../assets/Assets3/GooglePlay.png';
import bt_img from '../assets/Assets3/bottom_img.png';
import bhc_logo from '../assets/Assets3/bhc logo_1.png';
import bhc_text from '../assets/Assets3/Bridge HealthCare.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className='get_app'>
                    <div className='ready'>
                        <div className='ready_content'>
                            <img src='' />
                            <h3>Ready to join the community?</h3>
                            <p> It is a long established fact that a reader will be distracted</p>
                            <p>by the readable content.</p>
                        </div>
                        <button className='ready_btn'>Get Started</button>
                    </div>

                </div>
                <div className='bottom_ready'>
                    <div className='bottom_content'>
                        <h2 className='get_app_heading text-4xl font-bold tracking-wide pb-10'>Get The <span className='border-b-4 pb-2 app_text'>App</span> </h2>
                        <p className='get_app_text mb-8'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <div className='store_img flex flex-row'>
                            <img className='App_store_img mr-4' src={appStore} alt='App Store image' />
                            <img className='play_store_img' src={googleStore} alt='Play Store image' />
                        </div>
                    </div>
                    <div className='bottom_img'>
                        <img src={bt_img} alt='bottom image' />
                    </div>
                </div>

                <div className='bottom flex flex-row justify-around'>
                    <div className='logo'>
                        <img src={bhc_logo} alt='bhc logo' className='z-10' />
                        {/* <p className='text'>Bridge Healthcare
                            Private Limited</p> */}
                        <img src={bhc_text} alt='Bridge Health Care' className='z-0' />
                    </div>
                    <div className='text__icon flex flex-col'>
                        {/* <img src='.../Assets/' alt='BHC logo' /> */}
                        <div className='relative top-8 ml-12'>
                            <p className='text-lg'>Lorem Ipsum is simply dummy text of the</p>
                            <p className='text-lg'>printing andtypesetting industry.</p>
                        </div>
                        <div className='icons flex flex-row relative top-10 left-12'>
                            <a href='#' className='icons_elt'>
                                <FaFacebookF />
                            </a>
                            <a href='#' className='icons_elt'>
                                <FaTwitter />
                            </a>
                            <a href='#' className='icons_elt'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className='links flex flex-col space-y-4'>
                        <h3 className='flex flex-col text-2xl font-normal'>Our Links</h3>
                        <ul className='flex flex-col space-y-4'>
                            <li className='text-base'>About Us</li>
                            <li lassName='text-base'>Find Doctor</li>
                        </ul>
                    </div>
                    <div className='acc flex flex-col space-y-4'>
                        <h3 className='flex flex-col text-2xl font-normal'>Your Account</h3>
                        <ul className='flex flex-col space-y-4'>
                            <li lassName='text-base'>Login / Sign Up</li>
                            <li lassName='text-base'>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className='lower'>
                    <div className='copyright mg-l-4'>© Copyright 2022 Laso Soins Accessibles.</div>
                    <div className='privacy mg-l-4'>
                        <div className='policy mg-l-2'>Privacy policy</div>
                        <div className='terms mg-l-2'>Terms of Use</div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;

