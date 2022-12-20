import React from 'react'
import Marquee from "react-fast-marquee";
const CareerMarqueue = () => {
    const review = [
        {
            name: "Software Developer",
            vacancies : "2",
            image: "https://images.unsplash.com/photo-1505200063777-4a0b90b007c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "DevOps Engineer",
            vacancies : "5",
            image: "https://images.unsplash.com/photo-1506875534829-9a5183db5c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "Ml Engineer",
            vacancies : "33",
            image: "https://images.unsplash.com/photo-1608485439523-25b28d982428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "Data Science Intern",
            vacancies : "23",
            image: "https://images.unsplash.com/photo-1608485439523-25b28d982428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "Frontend Intern",
            vacancies : "5",
            image: "https://images.unsplash.com/photo-1608485439523-25b28d982428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }
        ,
        {
            name: "Backend Intern",
            vacancies : "9",
            image: "https://images.unsplash.com/photo-1608485439523-25b28d982428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }
    ]
    return (
        <div className="w-full h-full   py-10 px-7 ">
            <h1 className="text-center text-5xl font-bold font-gray-900 font-playfair">Jobs !</h1>
            <div className='overflow-x-hidden w-full h-full'>
                <Marquee speed={100} delay={0} gradientColor={[248, 251, 253]} gradientWidth={100}
                    className="flex items-center mt-20 ">
                    {
                        review.map((res) => (
                            <div className="flex flex-col justify-between p-10 rounded-2xl shadow-2xl mx-6 bg-white mb-10 border-2 border-gray-100 hover:bg-bhc_green hover:text-bhc_white duration-300 cursor-pointer" key={res.name}>
                                {/* <img src={res.image} alt="" /> */}
                                <span className="text-center text-2xl font-medium font-gray-900 font-lora tracking-wider">{res.name} ( {res.vacancies} )</span>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}
export default CareerMarqueue