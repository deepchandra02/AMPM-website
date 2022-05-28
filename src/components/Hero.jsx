import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/1.1.jpg';

const Hero = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
        <img src={image} alt="hero" className='h-full rounded mb-20 shadow' />
        <h1 className='absolute lg:text-5xl md:text-3xl sm:text-1xl text-1xl font-montserrat text-mpurple mb-14 text-align: center'>
        Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <Link to="/" className='absolute py-6 px-10 font-montserrat text-mpurple bg-none border-2 border-mpurple rounded-full text-3xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out flex item-center'>
            Contact Now
        </Link>
        <Link to="/" className='absolute py-6 px-10 font-montserrat text-mpurple border-2 border-mpurple rounded-full text-3xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out flex item-center'>
            Know More
        </Link>
    </div>
  )
}

export default Hero;
