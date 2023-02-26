import React from "react";

const Teaminfo = (props) => {
    return(
        <>
            <div className="w-full h-full flex justify-Start  items-center">
                <div className="left-img">
                <img src={props.imgsrc}></img>
                <h2>{props.h2}</h2>
                <span>{props.span}</span>
                </div>
                <div className="right-info">
                    <p>{props.p}</p>
                </div>
                </div>
        </>
    )
}

export default Teaminfo;