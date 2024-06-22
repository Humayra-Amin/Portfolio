import React from 'react';
import Image from 'next/image';
import profile from '../../../public/profile.jpg';
import { FaDownload } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero lg:h-[550px] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={profile} alt="Profile Picture" className="h-[400px] lg:h-auto md:h-auto lg:max-w-sm lg:mt-12 md:mt-10 md:max-w-sm rounded-full shadow-2xl"/>
                    <div className='text-center'>
                        <h1 className="text-5xl lg:text-6xl md:text-6xl font-bold playfair">Humayra Amin</h1>
                        <p className="py-6 font-semibold lg:text-xl md:text-xl  merriweather">Front End Developer | Skilled in HTML, CSS, JavaScript & Frameworks | Transforming Designs into Functional Web Interfaces | Creating Intuitive and Responsive Web Experiences</p>
                        <div className='flex justify-center gap-10'>
                            <a href='https://drive.google.com/file/d/1YRd0jsgcZNezSVTc-gVuxSfWz9siRZPm/view?usp=drive_link'><button className="btn bg-yellow-900 border-yellow-900 text-white lg:text-xl md:text-xl playfair hover:bg-yellow-700 hover:border-yellow-700"><span><FaDownload /></span>Download Resume</button></a>
                           <a href='https://drive.google.com/file/d/1-tl5Az1-1dZhuBJOlXawdwF8TLzHnrzl/view?usp=sharing'><button className="btn bg-yellow-900 border-yellow-900 text-white lg:text-xl md:text-xl  playfair hover:bg-yellow-700 hover:border-yellow-700"><span><FaDownload /></span>Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
