import React, { useState, useEffect, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import machine from "../assets/machine.jpg"
import heart from "../assets/heart.svg"
import blood from "../assets/blood.svg"
import weight from "../assets/weight.svg"
import height from "../assets/height.svg"
import temperature from "../assets/temperature.svg"
import glucometer from "../assets/glucometer.svg"
import spo2 from "../assets/spo2.png"
import tdmlogo from "../assets/tdmlogo.png"
import one from "../assets/one.png"
import two from "../assets/two.mp4"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.mp4"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import prod from "../assets/prod.png"
import Records from "../components/Records"
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import apple from "../assets/apple.png"
import android from "../assets/android.png"
import { Carousel } from "flowbite-react"

const Products = () => {
    const [toggleDoc, settoggleDoc] = useState(false)
    const ref = useRef()
    const [records, setrecords] = useState(false)
    const [load, setLoad] = useState(true)
    function closeRecords() {
        setrecords(false)
    }
    function openRecords() {
        setrecords(true)
    }
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);
    const services_tdm = [
        {
            desc: "Online Consultation",
            logo: <img src={one} alt="" className="w-40" />
        },
        {
            desc: "Real Time Data Tansmission",
            logo: <video src={two} alt="" className="w-32" />
        },
        {
            desc: "Primary Health check up",
            logo: <img src={three} alt="" className="w-32" />
        },
        {
            desc: "Connecting multi-Specialist",
            logo: <img src={four} alt="" className="w-20" />
        },
        {
            desc: "Online Appointment",
            logo: <img src={five} alt="" className="w-20" />
        },
        {
            desc: "Patient Digitalized Health records",
            logo: <img src={six} alt="" className="w-20" />
        },
        {
            desc: "Scanning and Printing Medical Records",
            logo: <video src={seven} autoPlay alt="" className="w-20" />
        },
    ]
    return (
        <>
            {
                load ? <Loader /> : <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  font-lora">
                    <Navbar navClr={true} />
                    <div className="w-full  my-20 flex justify-center ">
                        <div className="h-full w-1/2 flex flex-col  justify-center ">
                            <div className="flex ml-32 w-[90%] space-x-3 ">
                                <img src={tdmlogo} alt="" className="rounded-full w-20 h-20" />
                                <div className="flex flex-col">
                                    <span className="text-7xl font-lora font-bold tracking-wide text-gray-900 ">Bhara<span className="text-green-500">T</span><span className="text-orange-500">T</span>DM</span>
                                    <span className="text-center text-xs font-sans tracking-wider">NO DELAY IN HEALTH CARE</span>
                                </div>
                            </div>
                            <p className="px-32 mt-9 text-lg leading-snug tracking-wide ">Our innovation aims to bridge the
                                gap between doctors and patients
                                for better and timely health
                                consultation. We are developing
                                telemedicine devices and
                                applications in order to improve
                                primary healthcare by providing
                                doctor accessibility, analyzed
                                medical records and real time health
                                data.
                            </p>

                            <div className="mx-64 mt-10 bg-bhc_green text-bhc_white cursor-pointer rounded-3xl px-2 py-2 w-56 text-center font-lora shadow-2xl hover:bg-bhc_white hover:text-bhc_green border-2 hover:border-bhc_green duration-300" onClick={openRecords}>
                                <span><OpenInNewOutlinedIcon className="mr-3" />Open Brochure</span>
                            </div>
                        </div>
                        <div className="h-full w-1/2">
                            <img src={machine} alt="" className="h-full w-[80%]" />
                        </div>
                    </div>
                    <div className="h-[80vh] my-20 mx-auto w-[90%]  flex justify-center space-x-5 relative items-center bg-slate-50">
                        <span className="text-6xl font-bold  absolute -top-12 left-10 tracking-wide font-lora text-bhc_green">Live Parameters ...</span>
                        <img src={prod} alt="" className="rounded-2xl shadow-2xl w-[30%] h-[70%]" />
                        <div className="w-1/2 h-full  flex flex-wrap   p-6 gap-x-6 items-center justify-center">
                            <div className="flex flex-col bg-red-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-hex(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={blood} alt="" className="h-16 w-16" />
                                <span className="text-red-500 text-xl font-lora text-center">Blood Pressure</span>
                            </div>
                            <div className="flex flex-col bg-blue-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={heart} alt="" className="h-16 w-16" />
                                <span className="text-xl font-lora text-blue-500 text-center">Heart</span>
                            </div>
                            <div className="flex flex-col bg-pink-100 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={spo2} alt="" className="h-16 w-16" />
                                <span className="text-pink-800 font-bold text-xl font-lora text-center">SpO2</span>
                            </div>
                            <div className="flex flex-col bg-cyan-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={weight} alt="" className="h-16 w-16" />
                                <span className="text-cyan-500  mt-1 text-xl font-lora text-center">Weight</span>
                            </div>
                            <div className="flex flex-col bg-lime-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={height} alt="" className="h-16 w-16" />
                                <span className="text-lime-500 text-xl font-lora text-center">Height</span>
                            </div>
                            <div className="flex flex-col bg-emerald-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={glucometer} alt="" className="h-16 w-16" />
                                <span className="text-emerald-500 text-xl font-lora text-center">Sugar</span>
                            </div>
                            <div className="flex flex-col bg-rose-50 rounded-3xl w-1/4 h-1/4 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links items-center">
                                <img src={temperature} alt="" className="h-16 w-16" />
                                <span className="text-rose-500 text-xl font-lora text-center">Temperature</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto  w-[85%]  flex justify-center items-center gap-x-8 gap-y-4  relative mb-10 rounded-xl flex-wrap py-20  font-lora bg-gray-50">
                        <span className="text-7xl font-bold  absolute -top-12 left-2 tracking-wide font-lora text-bhc_green">Our Services...</span>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-blue-200 duration-100 group relative cursor-pointer justify-between py-16 shadow-xl text-gray-800 bg-slate-50">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl font-lora tracking text-gray-800'>Online Consultation</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-28 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-blue-600">
                                View on the App Store
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-green-200 duration-100 group relative cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl'>Realtime Data Transmission</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-28 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-green-600">
                                View on the Play Store
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-pink-200 duration-100 group relative cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl' >Primary Health Check Up</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-32 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-pink-600">
                                Install Now
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-purple-200 duration-100 group relative cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0  w-44 text-center mt-2 font-bold text-2xl'>Connecting Multi - Spetialist</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-32 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-purple-600">
                                Add To Chrome
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-yellow-200 duration-100 group relative cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0  w-44 text-center mt-2 font-bold text-2xl'>Online Appointment</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-36 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-yellow-600">
                                Follow us
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-yellow-200 duration-100 group  cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0  w-44 text-center mt-2 font-bold text-2xl'>Patient Digitalized Health Records</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-36 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-yellow-600">
                                Follow us
                            </div>
                        </div>
                        <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-yellow-200 duration-100 group relative cursor-pointer justify-between py-16 text-gray-800 bg-slate-50 shadow-xl">
                            <AcUnitIcon className="group-hover:opacity-0 w-14 h-14" fontSize="large" />
                            <div className='group-hover:opacity-0  w-44 text-center mt-2 font-bold text-2xl'>Scanning And Printing Medical Records</div>
                            <div className="group-hover:opacity-100 group-hover:-translate-y-36 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-yellow-600">
                                Follow us
                            </div>
                        </div>
                    </div>
                    <div className='h-screen w-full flex justify-center space-x-10 items-center bg-slate-100'>
                        <div className="w-1/3 flex flex-col space-y-3 font-lora ">
                            <span className="font-semibold text-5xl">Title</span>
                            <p className="tracking-wider leading-snug text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum hic eos aliquid ea dolorem nesciunt quas quidem enim natus.</p>
                            <span className="text-4xl font-semibold">Features</span>
                            {
                                toggleDoc ? <div className="flex flex-wrap gap-x-6 gap-y-6  p-2">
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">app1</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">app2</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg" >app3</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">app4</div>
                                </div> : <div className="flex flex-wrap gap-x-6 gap-y-6  p-2">
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">desktop1</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">desktop2</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg" >desktop3</div>
                                    <div className="shadow-2xl bg-white p-10 rounded-lg">desktop4</div>
                                </div>
                            }
                        </div>
                        <div className="w-1/3 flex flex-col space-y-20 ">
                            <div className='relative -top-20'>
                                <img src={toggleDoc ? "https://static.dtdl.in/live/wp-content/uploads/2021/04/26141011/one-shop1.png" : "https://static.dtdl.in/live/wp-content/uploads/2021/04/26141012/one-shop2.png"} alt="" className="w-full h-full" />
                            </div>
                            <div className="flex space-x-5 justify-center  w-full relative -top-20">
                                <div className="rounded-full overflow-hidden w-20 border-2 border-bhc_green p-3 flex items-center justify-center cursor-pointer group" onClick={() => settoggleDoc(true)}>
                                    <img src="https://static.dtdl.in/live/wp-content/uploads/2021/04/26141011/one-shop1.png" alt="" className="group-hover:scale-110 duration-300" />
                                </div>
                                <div className="rounded-full overflow-hidden w-20 border-2 border-bhc_green p-3 flex items-center justify-center cursor-pointer group" onClick={() => settoggleDoc(false)}>
                                    <img src="https://static.dtdl.in/live/wp-content/uploads/2021/04/26141012/one-shop2.png" alt="" className="group-hover:scale-110 duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-screen flex  items-center justify-center space-x-20  ">
                        <div className="h-full  w-[40%] sm:h-64 xl:h-80 2xl:h-full">
                            <Carousel slideInterval={5000}>
                                <img src="https://static.dtdl.in/projects/dtdl/wp-content/uploads/2021/04/19141249/one-app1.png" alt="" />
                                <img src="https://static.dtdl.in/projects/dtdl/wp-content/uploads/2021/04/19141255/one-app2.png" alt="" />
                                <img src="https://static.dtdl.in/projects/dtdl/wp-content/uploads/2021/04/19141302/one-app3.png" alt="" />
                            </Carousel>
                        </div>
                        <div className="flex flex-col font-lora space-y-7 w-1/3 ">
                            <span className="text-4xl font-semibold">Title2</span>
                            <p className="tracking-wider leading-snug font-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, corporis adipisci! Pariatur exercitationem itaque hic libero, velit et dolorum asperiores corporis, officia impedit quidem illo nobis at earum dolor.</p>
                            <span className="tracking-wide font-semibold text-xl font-lora">Download Application</span>
                            <div className="flex space-x-4">
                                <button className="px-5 py-2 bg-green-100 text-green-600 flex items-center justify-center space-x-4 duration-300 hover:scale-105 cursor-pointer">
                                    <img src={android} alt="" className="w-7"/> <span className=" font-lora ">Android</span></button>
                                <button className="px-5 py-2 bg-gray-200  text-black flex items-center justify-center space-x-4 duration-300 hover:scale-105 cursor-pointer"><img src={apple} alt="" className="w-7"/> <span className=" font-lora font-semibold tracking-wider ">IOS</span></button>
                            </div>
                        </div>
                    </div>
                    <Records records={records} setrecords={setrecords} closeRecords={closeRecords} openRecords={openRecords} />
                    <Footer />
                </div>
            }
        </>
    )
}
export default Products