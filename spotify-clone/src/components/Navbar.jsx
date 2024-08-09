import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img src={assets.arrow_left} alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar
