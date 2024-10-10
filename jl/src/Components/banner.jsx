import React from 'react'
import Image from '../Images/JLBanner.png'
import Navbar from './navbar'
const banner = () => {
  return (
    <div className="banner">
        <img src={Image} alt="" />
        {/* <Navbar/> */}
    </div>
  )
}

export default banner