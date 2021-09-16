import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

export const SideMenu = ({ hide_menu }) => {
  const [show_mobile_dropdown, setShowMobileDropdown] = useState(false);
  return (
    <div className="flex flex-col md:h-screen w-full p-5 md:py-10 md:px-5">
      <div className="justify-self-center">
        {
         !show_mobile_dropdown
          ? <img
            onClick={() => setShowMobileDropdown(!show_mobile_dropdown)}
            src="/nav-hamburger.svg" style={{ width: 30, height: 30 }}
            className="md:hidden"
          />
          :
          <img
            onClick={() => setShowMobileDropdown(!show_mobile_dropdown)}
            src="/nav-close-icon.svg" style={{ width: 30, height: 30 }}
            className="md:hidden"
          />
        }
        {
          <div className={`${!show_mobile_dropdown ? `hidden` : `visible`} fixed w-full bg-raisinblack left-0 z-10`}>
            <ul>
              <Link href="/about"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer p-2`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>About Me</li></Link>
              <Link href="/"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer p-2`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>Gallery</li></Link>
              <Link href="/flash-booking"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer p-2`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>Booking</li></Link>
            </ul>
          </div>
        }
        <div className={`${hide_menu ? `hidden md:block` : ``} rounded-full border-2 border-celeste overflow-hidden m-auto`} style={{ width: 160, height: 160 }}>
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                src={`/profile.jpg`}
                width={160}
                height={160}
                layout={`intrinsic`}
                objectFit={`cover`}
              />
            </Link>
          </div>
        </div>
        <h1 className={`${hide_menu ? `hidden md:block` : ``} text-5xl text-celeste font-bold mt-5 text-center`} style={{ fontFamily: `Times New Roman` }}>Riya Patel</h1>
        <p className={`${hide_menu ? `hidden md:block` : ``} text-white mt-3 text-center`}>
          Hi there, I'm Riya. I'm an apprentice tattoo artist and watercolour painter based in Ottawa
        </p>
      </div>
      <div className="hidden md:visible md:inline-block mt-10">
        <ul>
          <Link href="/about"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>About Me</li></Link>
          <Link href="/"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>Gallery</li></Link>
          <Link href="/flash-booking"><li className={`text-white text-md mb-2.5 underline text-center hover:text-lavenderblue cursor-pointer`} style={{ textDecorationColor: `#CCCFFF`, textDecorationStyle: `wavy`, fontSize: 20 }}>Booking</li></Link>
        </ul>
        <div className="flex justify-center mt-10">
          <Link href="https://instagram.com/scaledwings">
            <img src="/instagram-brands.svg" className="filter-white cursor-pointer" style={{ width: 35, height: 35 }} />
          </Link>
          <Link href="https://tiktok.com/@scaledwings">
            <img src="/tiktok-icon-white.svg" className="cursor-pointer" style={{ marginLeft: 10, width: 35, height: 35 }} />
          </Link>
        </div>
      </div>
    </div>
  )
}