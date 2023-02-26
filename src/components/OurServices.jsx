import React from 'react';


const OurServices = (props) => {
    return (
        <>
            <div className="w-full h-4/5 flex items-start bg-blue-900 ">
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className='card flex '>
                        <div className="card__side card__side--front">
                            <div className="card__picture flex flex-col bg-bhc_green justify-start absolute w-96 h-80">
                                <img src={props.imgsrc}/>
                                <h2 >{props.h2}</h2>
                                <p>{props.p}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;