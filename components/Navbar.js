import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-600 flex justify-between px-4 items-center text-white'>
            <div className="logo font-bold text-lg">
                
                <Link href="/">Bitlinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex space-x-3'>
                    <Link href="/shorten"><button className='bg-purple-400 shadow-lg rounded-xl py-1 font-bold p-3'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-400 shadow-lg rounded-xl py-1 font-bold p-3'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
