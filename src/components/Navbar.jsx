"use client"

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    console.log(pathName);
    const navLinks = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        }
    ];

    const handleLogin = () =>{
        router.push('/')
    };


    return (
        <nav className="flex justify-between items-center p-4 bg-cyan-400 text-white">
          <h3 className='text-3xl'>Next <span className='text-lime-600'>Hero</span></h3>
          <ul className="flex items-center gap-6">
            {
                navLinks?.map((link) => <li 
                key={link.path}
                className={`${pathName === link.path ? "text-lime-500" : undefined}`}>
                    <Link href={link.path}>{link.title}</Link>
                </li>)
            }
            <button onClick={handleLogin} className='p-3 text-lg bg-amber-500'>Login</button>
          </ul>
        </nav>
    );
};

export default Navbar;