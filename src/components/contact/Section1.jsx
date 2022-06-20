import React from 'react'
import ContactRectangle from '../images/ContactRectangle.svg'

const Section1 = () => {
  return (
    <div>
        <img src={ContactRectangle} alt='recantgle'/>
        <div className=' mx-14 bg-black absolute flex'>
        <div className='text-center text-white'>
            <h1>Existing Tenants</h1>
            <p>For our current residents we have a complete set of tools and procedures to make your stay with us more comfortable and rewarding.</p>
        </div>
        <div className='text-center text-white'>
            <h1>Prospective Residents</h1>
            <p>As a prospective tenant, we can help you through the process of finding and applying for the home of your dreams.</p>
        </div>
        <div className='text-center text-white'>
            <h1>Existing Clients/Owners</h1>
            <p>To fit your needs as a Landlord/Owner. We tailor our services to ensure that you have the highest level of service for your home.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Section1