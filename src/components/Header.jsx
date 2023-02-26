import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'
const Header =(props)=>{
    return(
        <div>
                 <div className=" ">
                        <div className='container' style={{
                            backgroundColor: "#25554D",
                            width: "100%",
                            height: "50%",
                            position: "absolute",
                            zIndex: "-1",
                            overflow: "hidden",
                            justifyContent:"center",
                            opacity:"0.8"}}
                            >   
                            <div
                            style={{position: "absolute"                                    ,
                                    width: "179px",
                                    height: "74.68px",
                                    left: "165px",
                                    top: "169.17px"}}>
                        <h1>{props.h1}</h1>
                        <div className='flex justify-center items-center'>
                        <span>{props.p}</span>
                        <span><FaGreaterThan/></span>
                        <span>{props.p1}</span>

                        </div>
                            </div>
                        </div>

                        </div>
        </div>
    )
}
export default Header;