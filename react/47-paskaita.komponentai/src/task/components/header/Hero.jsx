import React from 'react'
import heroBackground from "../../../assets/hero_bg.jpg";

export const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroBackground} alt="background" className="background" />
      <div className="overlay"></div>
      <h1>Title</h1>
      <p>Some about text <br/>in two lines</p>
      <button>Button</button>
    </div>
  )
}
