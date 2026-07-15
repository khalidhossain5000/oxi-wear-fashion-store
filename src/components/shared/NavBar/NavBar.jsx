"use client"
import Image from 'next/image';
import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavBar = () => {
    return (
        <header className="bg-red-600 dark:bg-foreground">
            <section className="max-w-7xl mx-auto">
            {/* logo */}
            <div>
                <Image
                src={'/logoh.png'}
                alt="Site logo"
                width={200}
                height={100}
                />
            </div>
            {/* nav items */}
            <div><h2 className='text-red-600 dark:text-white'>Hello world</h2></div>
            {/* cta and cart icon */}
            <div>
                <ThemeToggle/>
            </div>
            </section>
        </header>
    );
};

export default NavBar;