import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/1.1.jpg';

const Hero = () => {
  return (
    <div className='bg-slate-500 h-screen flex flex-col justify-center items-center'>
      <img src={image} alt="hero" className='h-full mt-[185px] p-0' />
      <div className='m-auto relative bottom-52'>
        <h1 className='lg:text-5xl md:text-3xl sm:text-1xl text-1xl font-["Montserrat"] text-mpurple mb-14 text-align:center'>
        Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <div className='flex justify-between'>
          <Link to="/" className='py-6 px-10 font-["Montserrat"] text-mpurple bg-none border-2 border-mpurple rounded-full text-3xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out flex item-center'>
            Contact Now
          </Link>
          <Link to="/" className='py-6 px-10 font-["Montserrat"] text-mpurple border-2 border-mpurple rounded-full text-3xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out flex item-center'>
            Know More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
