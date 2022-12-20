import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import ReviewsMarqueue from "../components/ReviewsMarqueue"
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Footer from "../components/Footer"
import Loader from '../components/Loader';

const Home = () => {
  const Header_One = [
    {
      image: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Our Mission",
      description: "We are a start-up that is striving hard to bring about a revolution in the field of healthcare services. We are team of technically skilled engineers and competent managers working to the zenith of our potential to help healthcare facilities reach every corner of the world to people belonging to every stratum of the society."
    },
    {
      image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Our Vision",
      description: "To make healthcare services available to every individual across the globe surpassing trivial barriers like economic feasibility because healthcare is a right, and not a privilege."
    }
  ]
  const Hero_Aim = [
    {
      desc: "Bridge Healthcare.Pvt.Ltd. is here to bring in a humanitarian revolution using technological assistance for everyone in the era of digitization.",
      title: "Aim",
      logo: <TrackChangesIcon fontSize="large" />
    },
    {
      desc: "We are an IIT Madras Research Park based healthcare firm that brings in innovative technology-based solutions to real-life problems.",
      title: "Origin",
      logo: <FilterDramaOutlinedIcon fontSize="large" />
    }
  ]
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, []);

  return (
    <>
      {
        load ? <Loader /> :
          <div className="w-screen h-screen scrollbar-thin scrollbar-thumb-bhc_green scrollbar-track-emerald-50 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <div className="w-full overflow-hidden">
              <Header />
            </div>
            <div className="w-full h-screen flex justify-center space-x-14 items-center">
              {
                Header_One.map((ele) => (
                  <div key={ele.title} className="w-[40%] h-[80%] flex flex-col items-center justify-center shadow-2xl p-10 rounded-3xl hover:shadow-emerald-900 hover:shadow-[0px_0px_30px_-10px_rgba(0,0,2,0.3)] duration-300 group">
                    <div className="w-full h-[90%] overflow-hidden cursor-pointer rounded-lg">
                      <img src={ele.image} alt="" className="hover:scale-110 duration-300 w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col space-y-5  w-[95%] relative -top-8 bg-white px-4 py-2 rounded-xl shadow-xl h-[70%] border-t-2  group-hover:border-bhc_green duration-300">
                      <h1 className="text-3xl font-semibold text-center  font-playfair tracking-wide">{ele.title}</h1>
                      <span className="text-center text-sm leading-6">{ele.description}</span>
                    </div>
                    <span className='block bg-bhc_green h-2 w-[40%] rounded-2xl'></span>
                  </div>
                ))
              }
            </div>
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-[85%] flex shadow-xl bg-slate-50 p-10 rounded-2xl justify-center">
                <div className="rounded-2xl overflow-hidden w-[50%] relative fle">
                  <img src="https://plus.unsplash.com/premium_photo-1668383208163-6acb12673857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="w-full h-full object-cover hover:scale-110 duration-300 absolute top-0 left-0" />
                </div>
                <div className='flex flex-col w-[40%] h-full p-10 justify-center items-center space-y-8'>
                  {
                    Hero_Aim.map((ele) => (
                      <div className="flex space-x-8  text-bhc_green items-center" key={ele.title}>
                        <span className="">
                          {ele.logo}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-playfair font-semibold text-2xl">
                            {ele.title}
                          </span>
                          <p className="text-gray-900 mt-2">
                            {ele.desc}
                          </p>
                        </div>
                      </div>
                    ))
                  }
                  <button className="border-2 border-bhc_green bg-bhc_green text-white px-4 py-2 duration-300 hover:bg-white hover:text-bhc_green cursor-pointer hover:scale-110 " >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      }
    </>

  )
}

export default Home
