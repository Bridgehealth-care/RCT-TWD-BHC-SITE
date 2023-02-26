import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader';
import { useState, useEffect } from 'react'
import OurServices from '../components/OurServices';
import people from '../assets/Assets3/people.png'
const Services = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);

    return(
        <>
        {
        load ? <Loader />  : 
            <div className="main-container">
                <Navbar navClr={true} />
                <div className="  ">
                    <Header
                         h1 = "Our Services"
                        p = "Home"
                        p1 = "Who We Serve"
                    />     
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                        <OurServices
                            imgsrc ={people}
                            h2 = "Individuals"
                            p = "Lorem Ipsum is simply dummy text of the printing typesetting psum has been the industry."
                        />
                     </div>
                     {/* <Footer/> */}
            </div>
        }
        </>
    )
}

export default Services