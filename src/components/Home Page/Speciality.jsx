import React from 'react';

const Speciality = (props) => {
    return(
        <div className="w-full h-[50%] py-10 px-7 bg-black flex justify-start ">
        <div className='small-component'>
        <img src={props.imgsrc} alt="derma pic" className='w-10 flex justify-center align-center'/>
        <h1 className='text-white text-2xl font-bold'>{props.para}</h1>
        </div>
        </div>
    )
}

export default Speciality;