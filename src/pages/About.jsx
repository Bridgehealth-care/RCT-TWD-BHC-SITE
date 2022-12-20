import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import about_gif from "../assets/about.gif"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import healthCare from "../assets/healthcare.gif"
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import gif2 from "../assets/gif2.gif"
import Loader from '../components/Loader';
import aboutus from "../assets/aboutus.mp4"
const About = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);

    const team_data = [
        {
            image: "https://www.bridgehealth.care/assets/img/team/3.png",
            name: "Dr. Rebecca",
            role: "Director",
            linkedin: "https://www.linkedin.com/in/rebecca-punithavalli-0857b048/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/1.png",
            name: "Anmol Garg",
            role: "CEO & Co-founder",
            linkedin: "https://www.linkedin.com/in/anmol-garg-422849119/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/2.png",
            name: "Rahul Soni",
            role: "CTO & Co-founder",
            linkedin: "https://www.linkedin.com/in/rahul-soni-b8782a83/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/4.png",
            name: "Divanshu Kumar",
            role: "Bussiness Adviser",
            linkedin: "https://www.linkedin.com/in/divinvolve/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/4.jpeg",
            name: "Maheshwari Amudha",
            role: "Technical Adviser",
            linkedin: "https://www.linkedin.com/in/maheswari-amudha-9a411863/"
        },
        {
            image: "https://www.bridgehealth.care/assets/img/team/5.jpeg",
            name: "Shubham Sharma",
            role: "Technical Adviser",
            linkedin: "https://www.linkedin.com/in/shubham-sharma-0144b9104/"
        }
    ]
    const who_are_we = [
        " Global healthcare scenario presents a spectrum of contrasting landscapes. Today we are a population of 7.9 billion with enormous diversity thus posing a huge challenge in the healthcare delivery systems.",
        "The total Global Consumer Healthcare Market size was valued at USD 3,32,391.42 Million in 2020 and is projected to reach USD 6,65,372.71 Million by 2028, growing at a Compound Annual Growth Rate of 8.56% from 2021 to 2028.",
        "Even then on the unfortunate side of the picture, Healthcare facilities are not made accessible to the poorer more remotely placed population.",
        "In the turbulent times that we live in, these kind of problems are aggravating. The gap between the poorer sections and premium healthcare has been rapidly widening. It is prime time that we address this issue."
    ]
    return (
        <>
            {
                load ? <Loader />  : 
                <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <Navbar navClr={true} />
                    <div className=" w-full min-h-screen flex flex-col ">
                        <div className=" w-full flex justify-center items-center">
                            <div className="w-1/3 text-gray-900">
                                <span className="text-4xl font-lora font-semibold  tracking-wide leading-snug">Meet our team of
                                    <span className="text-4xl italic text-gray-900 font-medium tracking-normal"> creators ,</span><br />
                                    <span className="text-4xl  italic text-gray-900 font-medium tracking-normal">designers </span>, and world-class <br />
                                    <span className="text-4xl  italic text-gray-900 font-medium tracking-normal">problem - solvers</span>
                                </span>
                            </div>
                            <div className="w-1/2 flex justify-end overflow-hidden">
                                <img src={about_gif} alt="" />
                            </div>
                        </div>
                        <div className="w-full h-screen flex items-center justify-center">
                            <video width="70%" height="20%" autoPlay loop muted >
                                <source src="https://www.bridgehealth.care/assets/img/Bridge%20Healthcare%20(2).mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div className=" flex flex-col w-[80%] min-h-screen font-lora ml-32 mb-20">
                            <h1 className="text-5xl text-bhc_green font-semibold font-lora">Our Team</h1>
                            <div className="w-full h-full bg-slate-100 rounded-lg mt-3 flex flex-wrap gap-20 justify-center p-8 font-lora">
                                {
                                    team_data.map((ele) => (
                                        <div className="flex flex-col items-center shadow-2xl p-7 rounded-2xl bg-white w-64 cursor-pointer">
                                            <img src={ele.image} alt="" className=" rounded-full object-cover" />
                                            <span className="text-center text-3xl font-bold text-gray-900 mt-3">{ele.name}</span>
                                            <span className="text-center text-md  text-gray-900">{ele.role}</span>
                                            <a className="bg-bhc_white text-bhc_green rounded-lg p-1 cursor-pointer duration-300 hover:bg-bhc_green hover:text-white hover:border-white border-2 border-bhc_green mt-3" href={ele.linkedin}>
                                                <LinkedInIcon />
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col w-[80%] min-h-screen font-lora ml-32 mb-20 bg-bhc_white p-10 rounded-lg shadow-xl">
                            <span className="text-5xl font-semibold text-bhc_green">Who are we ?</span>
                            <p className="text-bhc_green font-semibold mt-7 text-xl tracking-wide leading-10">Bridge Healthcare.Pvt.Ltd. is here to bring in a humanitarian revolution using technological assistance in this era of digitization. We are a new-age healthcare firm that brings in innovative technology-based solutions to real-life healthcare problems.</p>
                            <div className="w-full mt-10 flex">
                                <div className="w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                                    <img src={gif2} alt="" />
                                </div>
                                <div className="w-1/2 flex flex-col p-7 space-y-7">
                                    {
                                        who_are_we.map((ele) => (
                                            <div key={ele} className="flex space-x-4 items-center text-bhc_green font-medium tracking-wide leading-7">
                                                <TaskAltOutlinedIcon />
                                                <p className="text-md">{ele}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="p-10 shadow-2xl text-2xl tracking-wider leading-9 w-[80%] rounded-2xl  my-8 mb-20 mx-auto bg-bhc_green text-bhc_white font- hover:bg-bhc_white hover:text-bhc_green duration-700 border-2 border-bhc_white hover:border-x-bhc_green flex space-x-10 justify-between items-center">
                            <p className="text-center w-[50%] font-lora">
                                We as a <span className="font-bold">team</span> are striving for excellence and innovation in the domain of digital healthcare and want to achieve unrestricted accessibility to healthcare by people belonging to every stratum of our society. We envision a future where healthcare is made accessible to every corner of the globe irrespective of feasibility.
                            </p>
                            <div className="overflow-hidden rounded-3xl w-[40%] h-[50vh]">
                                <img src={healthCare} alt="" />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }           
        </>
    )
}

export default About