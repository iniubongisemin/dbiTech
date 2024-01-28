'use client'

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  HiHome, 
  HiUser, 
  HiViewColums, 
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2'
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  return (
    // Navbar container with flex layout, background color, and height
    <nav className='bg-[#F13024] h-[150px] sm:h-[40px] md:h-[90px] flex sm:items-center items-start justify-around text-white'>
      
      {/* Brand logo and name */}
      <aside className='flex items-center gap-x-0'>                
        <Link href={`/`}>
          <h3 className='relative'>dbi Technologies</h3>
        </Link>
      </aside>

      {/* Navigation links */}
      <ul className='relative flex sm:flex md:flex md:flex-row flex-col items-center justify-between capitalize gap-x-8'>
        {/* Hamburger menu for mobile */}
        <Link href='/' className='sm:hidden' onClick={toggleMobileMenu}>
          <li>
            <GiHamburgerMenu/>
          </li>
        </Link>
        
        { mobileMenuVisible &&
          <>

            {/* About link */}
            <Link href='/about' className='sm:block'>                
              <li></li>
            </Link>     

            {/* About link */}
            <Link href='/about' className='sm:block'>                
              <li><HiEnvelope /></li>
            </Link>            

            {/* About link */}
            <Link href='/about' className='sm:block'>                
              <li><HiChatBubbleBottomCenterText /></li>
            </Link>            

            {/* About link */}
            <Link href='/about' className='sm:block'>                
              <li><HiUser /></li>
            </Link>          

            {/* About link */}
            <Link href='/about' className='sm:block'>                
              <li><HiRectangleGroup /></li>
            </Link>            

            {/* ThemeSwitch buttton */}                
            <li><ThemeSwitch /></li>          
            
          </>
        }
      </ul>
    </nav>
  );
}

