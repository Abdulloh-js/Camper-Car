import React from 'react'
import img from "../../assets/cat-error.webp"

const NotFoundComponent = () => {
  return (
    <div ><img className='error' src={img} alt="404"/></div>
  )
}

export default NotFoundComponent