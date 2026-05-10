import Image from 'next/image';
import React from 'react';
import footerImage from '../../asset/logo-xl.png'
import instaImage from '../../asset/instagram.png'
import fbImage from '../../asset/facebook.png'
import xImage from '../../asset/twitter.png'
const Footer = () => {
    return (
        <footer className=" bg-[#244D3F] mt-[80px]">
            <aside className='footer footer-horizontal footer-center  text-primary-content pt-10'>
                <Image src={footerImage} width={'412px'} height={'60px'} alt='footerImage'></Image>
                <p className="font-bold md:text-sm text-xs">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <p className='text-[20px] font-medium pb-0'>Social Links</p>
                <div className='flex gap-4'>
                    <Image src={instaImage} alt='instaImage'></Image>
                    <Image src={fbImage} alt='fbImage'></Image>
                    <Image src={xImage} alt='xImage'></Image>
                </div>
            </aside>
            <nav className='max-w-[1100px] mx-auto'>
                <div className="divider"></div>
                <div className='flex md:flex-row flex-col md:text-sm text-xs justify-between items-center'>
                    <p className='text-gray-300'>© {new Date().getFullYear()} KeenKeeper - All right reserved</p>
                    <div className='flex gap-2 md:text-sm text-xs'>
                        <p className='text-gray-300 '>
                            Privacy Policy
                        </p>
                        <p className='text-gray-300 '>
                            Terms of Service
                        </p>
                        <p className='text-gray-300'>
                            Cookies
                        </p>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;