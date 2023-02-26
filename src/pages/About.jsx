import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import Services from '../components/About Us/Services';
// import Card from '../components/About Us/Card';
import CareHealth from '../components/careHealth';
import Header from '../components/Header';
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
                    <Header
                        h1 = "About Us"
                        p = "Home"
                        p1 = "About Us"
                    />
                        <div className="w-full h-screen flex items-center ">
                        <Services/>
                        </div>
           
          
                        {/* <div  style={{
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
                            {/* <div className="flex justify-center items-center">

                                <h2>We Care About Your Health</h2>
                                <p>We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.</p>
                            </div> */}
                        {/* </div>  */}
                        {/* import card element of family care here */}
                    <CareHealth
                        
                    />
                    </div>
                    {/* add footer component from here */}
                    <Footer />
                </div>
            }     
        </>
    )
}

export default About