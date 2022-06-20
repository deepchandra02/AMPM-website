import React from 'react'
import dasheslines from '../images/dasheslines.svg';
import ServicesRectangle from '../images/ServicesRectangle.svg';

const Services = () => {
  return (
    <div className='flex'>
        <div className='flex'>
          <img src={ServicesRectangle} alt='ServicesRectangle' className='w-1/2'/>
            <div className='absolute text-right '>
              <h1>Worried about <br />managing your property?</h1>
              <h2>Al-Madar is here to help!</h2>
              <p className='justify-center'>Al Madar Property Management Services<br/> encompass operation management,<br/> maintenance, and general monitoring of<br/> the properties, all while assuring quality<br/> and transparency in all that is done. </p>
              <button>Explore Now!</button>
            </div> 
        </div>
        <div className='bg-black'>
            <img src={dasheslines} alt='dasheslines' className=' w-80 h-1/2'/>
        </div>
    </div>
  )
}

export default Services