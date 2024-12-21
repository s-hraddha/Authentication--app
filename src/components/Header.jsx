import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='bg-black'>
            <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
                <Link href='/' className='text-2xl font-extrabold cursor-pointer'>
                    <span className='text-2xl font-bold drop-shadow-md text-white'>
                        AuthApp
                    </span>
                </Link>
                <nav>
                    <ul className='flex gap-4 text-white'>
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/sign-in'>Sign In</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
