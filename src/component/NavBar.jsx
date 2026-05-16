'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../asset/KeenKeeper.png'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathName = usePathname();
    const [menuOpen, setMenuOpen] = useState(false)

    const link = <>
        <Link href={'/'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><FaHome />Home</Link>
        <Link href={'/timeline'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/timeline' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><IoIosTime />Timeline</Link>
        <Link href={'/status'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/status' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><ImStatsDots />Stats</Link>
    </>

    return (
        <div className="bg-base-100 shadow-sm">
            <div className='container mx-auto navbar justify-between items-center'>
                <div className="">
                    <Image src={logo} alt='KeenKeeper'></Image>
                </div>
                <div className="navbar-end">
                 
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-x-1">
                            {link}
                        </ul>
                    </div>

                
                    <button
                        className="lg:hidden text-[24px] text-[#244D3F]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>

          
            {menuOpen && (
                <ul className="lg:hidden flex flex-col gap-2 px-4 pb-4 bg-white">
                    <li onClick={() => setMenuOpen(false)}>{link}</li>
                </ul>
            )}
        </div>
    );
};

export default NavBar;