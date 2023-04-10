import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='my-container my-container-gap'>
            <h2 className='text-5xl text-center font-bold'>Job Category List</h2>
            <p className='text-center my-4 text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    categories.map((category) => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryContainer;