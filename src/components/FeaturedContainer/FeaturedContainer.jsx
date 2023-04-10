import React, { useEffect, useState } from 'react';
import Featured from '../Featured/Featured';

const FeaturedContainer = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect( () => {
        fetch("featuredJobs.json")
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])
    return (
        <div className='my-container my-container-gap'>
            <h2 className='text-5xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-center my-4 text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    featuredJobs.slice(0, 4).map((featuredJob) => <Featured key={featuredJob.id} featuredJob={featuredJob}></Featured>)
                }
            </div>
        </div>
    );
};

export default FeaturedContainer;