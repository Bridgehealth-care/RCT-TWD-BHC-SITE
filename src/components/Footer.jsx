import React from 'react';
// import { Link } from 'gatsby';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ReactDOM } from 'react';

const Footer = () => {
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
