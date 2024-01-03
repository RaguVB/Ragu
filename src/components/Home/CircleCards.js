import React from 'react'
import succulent from 'assets/succulent.jpg'
import pots from 'assets/pots.jpg'
import collection2 from 'assets/collection2.jpg'

function CircleCards() {
    return(
        <div className='mb-20 w-full'>
            <h1 className='m-10 p-6 text-3xl md:text-5xl font-display text-gray-800 text-center'>Why You'll Love GreenUniverse?</h1>
            <ul className='flex flex-col md:flex-row w-full 2xl:w-3/4 2xl:m-auto
            space-y-12 md:space-y-0 text-center md:space-x-12 justify-around'>
                <li className='flex flex-col space-y-6 m-auto md:m-0'>
                    <img className="m-auto h-52 w-52 rounded-full" src={succulent} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'> Planted with Love </h2>
                    
                </li>
                <li className='flex flex-col space-y-6 m-auto md:m-0'>
                    <img className="m-auto h-52 w-52 rounded-full" src={collection2} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'>Sustainable Approach</h2>
                    
                </li>
                <li className='flex flex-col space-y-6 m-auto md:m-0'>
                    <img className="m-auto h-52 w-52 rounded-full" src={pots} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'>Hand Crafted</h2>
                    
                </li>
            </ul>
        </div>
    )
}

export default CircleCards