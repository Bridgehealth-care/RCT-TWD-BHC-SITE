import React from 'react'
import Marquee from "react-fast-marquee";
const ReviewsMarqueue = () => {
    const review = [
        {
            desc: "Bridging the gap in health care is the need of the hour . Clinical parameters with a high level of accuracy aid the health care professionals to render better disease management.Our innovation helps to reach the unreached - the lonely senior citizens, the economically disadvantaged,those in remote areas far from tertiary health care.",
            name: "Abhay Bisht",
            job: "SDE Intern",
            image: "https://images.unsplash.com/photo-1505200063777-4a0b90b007c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            desc: "Bridging the gap in health care is the need of the hour . Clinical parameters with a high level of accuracy aid the health care professionals to render better disease management.Our innovation helps to reach the unreached - the lonely senior citizens, the economically disadvantaged,those in remote areas far from tertiary health care.",
            name: "Justin Lin",
            job: "Software Engineer",
            image: "https://images.unsplash.com/photo-1506875534829-9a5183db5c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            desc: "Bridging the gap in health care is the need of the hour . Clinical parameters with a high level of accuracy aid the health care professionals to render better disease management.Our innovation helps to reach the unreached - the lonely senior citizens, the economically disadvantaged,those in remote areas far from tertiary health care.",
            name: "Karan Verma",
            job: "Software Engineer",
            image: "https://images.unsplash.com/photo-1608485439523-25b28d982428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }
    ]
    return (
        <div className="w-full mt-9  py-10 px-7 overflow-x-hidden">
            <h1 className="text-center text-5xl font-bold font-gray-900 font-playfair">Words from the Team</h1>
            <div className='overflow-x-hidden w-full h-full'>
                <Marquee speed={100} delay={0} gradientColor={[248, 251, 253]} gradientWidth={100}
                    className="flex items-center mt-20 ">
                    {
                        review.map((res) => (
                            <div className="w-[40vw] h-[55vh] flex flex-col justify-between p-10 rounded-2xl shadow-2xl mx-6 bg-white mb-10 border-2 border-gray-100" key={res.name}>
                                <p className="text-lg text-gray-900  tracking-wide ">{res.desc}</p>
                                <picture className="flex space-x-10 items-center mt-10">
                                    <img src={res.image} alt="" className="rounded-3xl h-20 w-20 object-cover" />
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-xl text-black font-semibold tracking-wide">{res.name}</span>
                                        <span className="font-xl text-gray-600">{res.job}</span>
                                    </div>
                                </picture>
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}
export default ReviewsMarqueue