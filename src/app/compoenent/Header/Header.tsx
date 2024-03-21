import React from 'react'
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode } from 'react-icons/md';
const Header = () => {
    return (
        <header className='py-10 px-4 container  mx-auto  text-xl flex flex-wrap md:flex-nowrap item-center justify-between'>
            <div className='flex items-center w-full md:2/3'>
                <Link href="/" className='font-black text-tertiary-dark' >
                    Hotelzz
                </Link>
                <ul className="flex items-center ml-5">
                    <li className='flex item-center'><Link href="/auth">
                        <FaUserCircle className="cursor-pointer" />
                    </Link></li>
                    <li className='ml-2'>
                            <MdDarkMode className='cursor-pointer'/>
                    </li>
                </ul>
            </div>

            <ul className='flex items-center justify-between  w-full md:w-1/3 mt-4'>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                <Link href={"/"}>Home</Link></li>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                <Link href={"/room"}>Rooms</Link></li>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                <Link href={"/"}>Contact</Link></li>
            </ul>

        </header>
    )
}

export default Header
