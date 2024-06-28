"use client";

import React from 'react';
import Image from 'next/image';
import profile from '../../../public/IMG-20240524-WA0034.jpg';
import { FaDownload } from 'react-icons/fa6';
import { MdOutlineContactPage } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero lg:h-[550px] bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={profile} alt="Profile Picture" className="w-[300px] h-[280px] mt-14 lg:h-auto md:h-auto lg:w-[400px] lg:mt-12 md:mt-14 md:w-[400px] rounded-full shadow-2xl" />
                    <div className='text-center'>
                        <h1 className="text-5xl lg:text-6xl md:text-6xl font-bold playfair">Humayra Amin</h1>
                        <p className="py-6 font-semibold text-2xl lg:text-4xl md:text-3xl  merriweather">&lt;p&gt;<Typewriter words={[" Junior Front End Developer ", " Web Developer ", " React Frontend Developer ", " React Frontend Developer ", " NodeJs Developer ", " MERN Developer ", " Full Stack Developer "]} loop={0} cursor={1}></Typewriter>&lt;/p&gt;</p>
                        <div className='flex justify-center gap-10'>
                            <a href='https://drive.google.com/file/d/1YRd0jsgcZNezSVTc-gVuxSfWz9siRZPm/view?usp=drive_link'><button className="btn bg-gray-900 border-gray-900 text-white lg:text-xl md:text-xl playfair hover:bg-gray-700 hover:border-gray-700"><span><FaDownload /></span>Download Resume</button></a>
                            <Link href={'/contact'}>
                                <button className="btn bg-gray-900 border-gray-900 text-white lg:text-xl md:text-xl  playfair hover:bg-gray-700 hover:border-gray-700"><span><MdOutlineContactPage /></span>Get In Touch</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
