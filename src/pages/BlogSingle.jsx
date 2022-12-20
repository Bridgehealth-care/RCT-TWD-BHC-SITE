import React, { useState, useEffect, useRef } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const BlogSingle = () => {
  const ref = useRef()
  const [load, setLoad] = useState(true)
  const [blogData, setBlogData] = useState({})
  const state = useLocation()
  useEffect(() => {
    console.log(state)
    const data = state.state;
    setBlogData(data)
    console.log(data)
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, []);
  return (
    <>
      {
        load ? <Loader /> : <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full font-lora">
          <Navbar navClr={true} />
          <div className="w-[70%] mx-auto min-h-screen py-10 flex flex-col items-center bg-card_bg">
            <h1 className="text-center text-5xl font-semibold tracking-wider font-lora leading-snug">{blogData.title}</h1>
            <img src={blogData.image} alt="" className='w-[100%] mt-10 rounded-2xl h-[400px] object-cover'/>
            <div className="flex flex-col w-full  mt-10 space-y-7">
            {blogData.description && 
              <p className=" tracking-wider leading-relaxed text-lg">{blogData.description}</p>
            }
              {
                    blogData.highlight && 
                    <span className="bg-bhc_white font-bold text-3xl text-bhc_green tracking-wide p-10 border-l-4 border-bhc_green rounded-br-2xl rounded-tr-2xl">
                      {blogData.highlight}
                    </span>
              }
            </div>
            {
              blogData.subdescriptions.map((ele)=>(
                <div className="flex flex-col w-full mt-10 space-y-7 items-center">
                  <span className="text-3xl font-semibold">{ele.title}</span>
                  <p className="tracking-wider leading-relaxed text-lg">{ele.body}</p>
                  {
                    ele.highlight && 
                    <span className="bg-bhc_white font-bold text-3xl text-bhc_green tracking-wide p-10 border-l-4 border-bhc_green rounded-br-2xl rounded-tr-2xl text-center">
                      {ele.highlight}
                    </span>
                  }
                  {
                    ele.image && 
                    <img src={ele.image} alt=""  className='w-[100%] h-[380px] rounded-2xl object-cover'/>
                  }
                  {
                    ele.body2 && 
                    <p className="tracking-wider leading-relaxed text-lg">{ele.body2}</p>
                  }
                  {
                    ele.image2 && 
                    <img src={ele.image2} alt=""  className='w-[100%] h-[380px] rounded-2xl object-cover'/>
                  }
                  {
                    ele.body3 && 
                    <p className="tracking-wider leading-relaxed text-lg">{ele.body3}</p>
                  }
                  {
                    ele.features && ele.features.map((ele2)=>(
                      <div className="flex flex-col w-full mt-10 space-y-7 items-center">
                        <span className="text-3xl font-semibold">{ele2.title}</span>
                        <p className="tracking-wider leading-relaxed text-lg">{ele2.desc}</p>
                      </div>
                    ))
                  }
                  {
                    ele.body4 && 
                    <p className="tracking-wider leading-relaxed text-lg">{ele.body4}</p>
                  }
                </div>
              ))
            }
          </div>
          <Footer />
        </div>
      }
    </>
  )
}
export default BlogSingle