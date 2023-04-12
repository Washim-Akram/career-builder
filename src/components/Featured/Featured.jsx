import React from 'react';
import { Link } from 'react-router-dom';

const Featured = ({featuredJob}) => {
    const {id, compony_logo, job_title, compony_name, remote_or_onsite, location, time, salary} = featuredJob;
    return (
        <div className='border p-10 rounded-lg'>
            <img className='mb-8' src={compony_logo} alt={compony_name} />
            <h3 className='text-2xl font-bold mb-2'>{job_title}</h3>
            <h4 className='text-xl text-gray-400 font-medium mb-4'>{compony_name}</h4>
            <button className='btn-outlined mr-4'>{remote_or_onsite}</button>
            <button className='btn-outlined'>{time}</button>
            <p className='mt-4 mb-6 text-gray-400 font-medium'>
                <span className='mr-6'>Location: {location}</span>
                <br className='block md:hidden'/>
                <span>{salary}</span> </p>
            <Link to={`job/${id}`}>
                <button className='btn-secondary'>View Details</button>
            </Link>
        </div>
    );
};

export default Featured;