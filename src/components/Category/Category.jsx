import React from 'react';
import './Category.css';

const Category = ({category}) => {
    const {name, logo, availableJobs} = category;
    return (
        <div className='category'>
            <img className='mb-8' src={logo} alt={name} />
            <h4 className='font-bold text-xl'>{name}</h4>
            <p className='font-medium text-gray-400'>{availableJobs}</p>
        </div>
    );
};

export default Category;