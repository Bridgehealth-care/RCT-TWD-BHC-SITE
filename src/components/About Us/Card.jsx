import React from 'react';
// import FaHouseUser from 'react-icons/fa'

const Card = (props) => {
    return (
        <div className='card'style={{backgroundColor: "grey"}}>
       <img src={props.imgsrc}
         alt='house' className='card-img'/>
      <div className='card-body'>
        <span className='card-heading'>{props.title}</span>
        <h3 className='card-para'>{props.para}</h3>
      </div>
        </div>
    )
}
export default Card;