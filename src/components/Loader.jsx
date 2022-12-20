import React from 'react'
import loading from "../assets/loading2.gif"

const Loader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            <img src={loading} alt="" className="w-1/12"/>
            {/* <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_g0xeklmz.json" background="transparent" speed="2.2" style={{width: "150px" ,  height: "150px"}} loop autoplay></lottie-player> */}
        </div>
    )
}

export default Loader