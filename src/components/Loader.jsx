import React from 'react'
import loading from "../assets/loading.gif"

const Loader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-sky-100">

            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_g0xeklmz.json" background="transparent" speed="2.2" style={{width: "150px" ,  height: "150px"}} loop autoplay></lottie-player>
        </div>
    )
}

export default Loader