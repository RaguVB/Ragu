import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer className='bg-gray-200 bg-opacity-40 w-screen pt-8 pb-28'>
            <div className='flex flex-col md:flex-row justify-center w-5/6 2xl:w-7/12 m-auto justify-between
                space-y-12 md:space-y-0'>
                <div className='text-left md:text-left m-auto w-full md:w-0'>
                    <h1 className='font-display font-medium text-2xl text-gray-900'><b>Join the Green Universe Family</b></h1>
                    <p className='font-body py-4 w-72 text-gray-700'>Get plant care tips and tricks delivered straight to your mailbox.</p>
                    <div className='flex mt-6'>
                        <input className='h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 border hover:border-gray-700 focus:border-gray-700 focus: border-2 focus:outline-none'
                            type='text'
                            placeholder='Enter Your Email...'></input>
                        <button className='h-12 p-4 w-28 font-body text-sm bg-gray-900 text-white rounded-r
                            transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className='flex space-x-6 md:space-x-24'>
                    <div className='flex flex-col space-y-4'>
                        <Link to='/'>
                            <h1 className='font-display font-medium md:text-lg text-gray-900'><b>Green Universe</b></h1>
                        </Link>
                        <Link className='font-body text-gray-700 text-sm md:text-base flex-col space-y-4' to='/about'>
                            <p>About Us</p>
                            
                        </Link>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <Link to='/shop'>
                            <h1 className='font-display font-medium md:text-lg text-gray-900'><b>Shop</b></h1>
                        </Link>
                        <Link to='/shop/airPurifying'>
                            <p className='font-body text-sm md:text-base text-gray-700'><b>Air Purifying</b></p>
                        </Link>
                        <Link to='/shop/beginner'>
                            <p className='font-body text-sm md:text-base text-gray-700'><b>Beginner Friendly</b></p>
                        </Link>
                        <Link to='/shop/petFriendly'>
                            <p className='font-body text-sm md:text-base text-gray-700'><b>Pet Friendly</b></p>
                        </Link>
                        <Link to='/shop/succulents'>
                            <p className='font-body text-sm md:text-base text-gray-700'><b>Succulents</b></p>
                        </Link>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-display font-medium md:text-lg text-gray-900'>Contact</h1>
                        <p className='font-body text-sm text-gray-700'>example@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer