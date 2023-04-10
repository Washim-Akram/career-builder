import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/Images/P3OLGJ1 copy 1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
            <div className='max-w-xl mb-6 lg:mt-8'>

                <h2 className='max-w-lg mb-6 font-sans lg:text-7xl font-bold text-gray-900 sm:text-4xl sm:leading-none'>
                One Step <br className='hidden md:block' /> Close To Your <br className='hidden md:block' />
                <span className='inline-block text-blue-400'>Dream Job</span>
                </h2>
                <p className='text-base text-gray-700 md:text-lg'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
            </div>
                <Link to='/'>
                    <button  className='btn-primary'>Get Started</button>
                </Link>
            </div>
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <img src={bannerImage} alt="A man stand with confident" />
                </div>
            </div>
        </div>

    );
};

export default Banner;