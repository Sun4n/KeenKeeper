'use client'
import Image from 'next/image';
import React from 'react';
import logo from '../asset/KeenKeeper.png'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';
import { usePathname } from 'next/navigation';
const NavBar = () => {
    const pathName = usePathname();
    const link = <>
        <Link href={'/'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><FaHome />Home</Link>
        <Link href={'/timeline'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/timeline' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><IoIosTime />Timeline </Link>
        <Link href={'/status'} className={`flex gap-2 items-center text-[1rem] font-semibold text-[#64748B] ${pathName === '/status' && "bg-[#244D3F] text-white px-4 py-3 rounded-[4px]"}`}><ImStatsDots />Stats</Link>
    
    </>
    return (
        <div className="  bg-base-100 shadow-sm">
            <div className='container mx-auto navbar justify-between items-center'>
                <div className="">
                    <Image src={logo} alt='KeenKeeper'></Image>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;