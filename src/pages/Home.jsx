import React, { useState, useEffect } from 'react'
import HomeHeader from '../components/HomeHeader'
// import ReviewsMarqueue from "../components/ReviewsMarqueue"
// import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
// import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Footer from "../components/Footer"
import Loader from '../components/Loader';
import Speciality from '../components/Home Page/Speciality';
import Derma from ".././assets/Derma.png"
import Lungs from '.././assets/Lungs.png'

const Home = () => {

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
              <HomeHeader />
            </div>
            <div className="w-full h-screen flex justify-center space-x-14 items-center">
            {/* main page part one */}
          <div className='left-content w-full h-full'>
            <span className=" text-black w-full  left-96 non-italic text-4xl font-bold leading-10  text-sky-940 tracking-wider flex flex-row-reverse">Quality Healthcare Starts</span><br/>
            <span className=" text-black w-full top-3/4 left-96 non-italic text-4xl font-bold leading-10 text-sky-940 tracking-wider flex flex-row-reverse inset-x-5 ">With Quality</span>
            <span className= " non-italic left-96 text-3l  tracking-wider text-black flex flex-row-reverse w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </span>
            <span className= " non-italic left-96 text-3l  tracking-wider text-black flex flex-row-reverse w-full"> standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            <p className= " non-italic left-96 text-3l right-0 tracking-wider text-black flex flex-row-reverse w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
            <button className='bg-black text-white tracking-wide w-20 h-10 rounded-lg py-px flex'>Read More</button>
          </div>
            </div>
          {/*our speciality */}
            <div className="w-full h-[50%] top-2  bg-neutral-200">
            <h2 className='font-bold leading-10 flex text-center justify-center'>Our Speciality</h2>
            <span className='flex  text-center justify-center'>Ask a doctor online and get quick medical advice for your health queries.  </span>
            <span className='flex  text-center justify-center'>Our medical panel consists of over 3500, doctors from 80, specialties.</span>
            <Speciality
              imgsrc = {Derma}
              para = "Dermatology"    
            />
            <Speciality 
              imgsrc = {Lungs}
              para = "Internal Medicine"    
            />
            <Speciality 
              imgsrc = {Derma}
              para = "Neurology"    
            />
            <Speciality 
              imgsrc = {Derma}
              para = "General Medicine"    
            />
            <Speciality 
              imgsrc = {Derma}
              para = "Dentistry"    
            />
            <Speciality 
              imgsrc = {Derma}
              para = "Otalaryngology"    
            />
            
            </div>
            <Footer />
          </div>
      }
    </>

  )
}

export default Home
