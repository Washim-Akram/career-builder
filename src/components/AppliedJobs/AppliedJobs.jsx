import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utils/fakeDB';
import AppliedJob from '../AppliedJob/AppliedJob';
import GeneralBanner from '../GeneralBanner/GeneralBanner';

const AppliedJobs = () => {
    const [specifiedJob, setSpecifiedJob] = useState([]);

    const shoppingCart = getShoppingCart();
    const jobs = useLoaderData();

    useEffect(() => {
        const arrOfJobs = [];
        for(const id in shoppingCart) {
            const specificJob = jobs.find(job => job.id == id)
            arrOfJobs.push(specificJob);
           }
           setSpecifiedJob(arrOfJobs);
    },[])

    return (
        <div>
            <GeneralBanner>
                <h2 className='text-3xl font-extrabold flex items-center justify-center'>Applied Jobs
                </h2>
            </GeneralBanner>

            <div className='my-container'>
               {
                specifiedJob.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
               }
            </div>
        </div>
    );
};

export default AppliedJobs;