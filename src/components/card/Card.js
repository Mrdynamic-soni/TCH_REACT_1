import React from 'react';
import "./card.css"

const Card = ({heading, buttonName, desc, onPress}) => {
  return (
    <div className='card'>
      <div className='heading'>{heading}</div>
      <div className='desc'>{desc}</div>
      <button onClick={onPress} className='btn'>{buttonName}</button>
    </div>
  )
}

export default Card