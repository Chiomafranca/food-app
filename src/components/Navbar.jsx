import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'
import { MdOutlineFavorite } from 'react-icons/md'
import { AiFillWallet } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BsSaveFill } from 'react-icons/bs'
import { GiStarProminences } from 'react-icons/gi'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
            {/* LEFT SIDE */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className=' cursor-pointer'>
                    <AiOutlineMenu size={35} />
                </div>
                <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>Finest <span className='font-bold'>Eats</span></h1>
                <div className='hidden lg:flex items-center bg-pink-300 rounded-full p-1 text-[14px]'>
                    <p className='bg-pink-500 text-white rounded-full p-2'>Delivery</p>
                    <p>Pickup</p>
                </div>
            </div>
            {/* Search input */}
            <div className='bg-pink-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <GoSearch size={20} />
                <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search food' />
            </div>
            {/* Card */}
            <button className='bg-pink-800/70 text-white hidden md:flex items-center py-2 rounded-full'>
                <AiOutlineShoppingCart className='mr-2' size={20} />
                Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-pink-800/60 fixed w-full h-screen z-10 top-0 left-0'>

            </div> : ""}


            {/* Side drwar menu */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose size={30}
                    className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)} />
                <h2 className='text-2xl'>Finest <span className='font-bold'>Eat</span></h2>
                <ul className='flex flex-col p-4 text-gray-900'>
                    <li className="text-xl py-4 flex items-center"><BsTruck className='mr-2' />Orders</li>
                    <li className="text-xl py-4 flex items-center"><MdOutlineFavorite className='mr-2' />Favorities</li>
                    <li className="text-xl py-4 flex items-center"><AiFillWallet className='mr-2' />Wallat</li>
                    <li className="text-xl py-4 flex items-center"><BiHelpCircle className='mr-2' />Help</li>
                    <li className="text-xl py-4 flex items-center"><BsFillPeopleFill className='mr-2' />Invite friends</li>
                    <li className="text-xl py-4 flex items-center"><BsSaveFill className='mr-2' />Finest on e</li>
                    <li className="text-xl py-4 flex items-center "><GiStarProminences className='mr-2' />Promotion</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
