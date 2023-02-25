import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import about_gif from "../assets/about.gif"
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import healthCare from "../assets/healthcare.gif"
// import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
// import gif2 from "../assets/gif2.gif"
import Loader from '../components/Loader';
import Services from '../components/About Us/Services';
import Card from '../components/About Us/Card';
// import aboutus from "../assets/aboutus.mp4"
const About = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);


 
    return (
        <>
            {
                load ? <Loader />  : 
                <div className="main-container">
                    <Navbar navClr={true} />
                    <div className="  ">
                        <div className=" ">
                        <div className='container' style={{
                            backgroundColor: "red",
                            width: "100%",
                            height: "50%",
                            position: "absolute",
                            zIndex: "-1",
                            overflow: "hidden",
                            justifyContent:"center"}}>   
                            <div
                            style={{position: "absolute"                                    ,
                                    width: "179px",
                                    height: "74.68px",
                                    left: "165px",
                                    top: "169.17px"}}>

                        <h1>About Us</h1>
                        <p>Home {'>'} About Us</p>
                            </div>
                        </div>

                        </div>
                        <div className="w-full h-screen flex items-center ">
                        <Services/>
                        </div>
           
          
                        <div  style={{
                            height: "500px",
                            width: "100%",
                            left: "-0.05px",
                            top: "966px",
                            borderRadius: "0px",
                            display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            textAlign: "center",
                            backgroundColor: "#F5F5F5",
                            marginTop: "160px",
                        }}>
                            <div className="flex justify-center items-center">

                                <h2>We Care About Your Health</h2>
                                <p>We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.</p>
                            </div>
                        </div>
                            <Card title = "Family Care"
                                para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                imgsrc = "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/home-house-icon.png"
                            />
                            <Card title = "Urgent Care"
                            imgsrc = "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/home-house-icon.png"
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                            />
                            <Card title = "Regular care"
                                imgsrc = "https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/home-house-icon.png"
                                para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                            />
                    </div>
                    <Footer />
                </div>
            }           
        </>
    )
}

export default About