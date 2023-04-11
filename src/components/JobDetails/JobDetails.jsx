import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import title from '../../assets/Icons/Frame-1.png';
import phone from '../../assets/Icons/Frame-2.png';
import email from '../../assets/Icons/Frame-3.png';
import address from '../../assets/Icons/Frame-4.png';
import salary from '../../assets/Icons/Frame.png';
import { addToDb } from '../../utils/fakeDB';
import GeneralBanner from '../GeneralBanner/GeneralBanner';
import './JobDetails.css';

const JobDetails = () => {
    const [jobDetails, setJobDetails] = useState({});
    const dynamic = useParams();
    const dynamicIdStr = dynamic.id;
    const dynamicId = parseInt(dynamicIdStr);

    const details = useLoaderData();

    useEffect( () => {
        const specificJobDetails = details.find(detail => detail.id === dynamicId);
        setJobDetails(specificJobDetails);
    },[details])

    const handleAddJobToStorage = (id) => {
        addToDb(id);
    }

    return (
        <div>
            <GeneralBanner><h2 className='text-3xl font-extrabold flex items-center justify-center'>Job Details</h2></GeneralBanner>
            <div className='my-container my-container-gap'>
            <div className='flex flex-col items-center md:items-start md:flex-row gap-5'>
                <div>
                    <p className='text-gray-500 mb-6'><span className='font-bold text-black'>Job Description: </span>{jobDetails.description}</p>

                    <p className='text-gray-500 mb-6'><span className='font-bold text-black'>Job Responsibility: </span>{jobDetails.responsibility}</p>

                    <div className='mb-6'>
                        <p  className='font-bold mb-2'>Educational Requirements:</p>
                        <p className='text-gray-500'>{jobDetails.requirements}</p>
                    </div>

                   <div>
                        <p  className='font-bold mb-2'>Experiences</p>
                        <p  className='text-gray-500'>{jobDetails.experiences}</p>
                   </div>
                </div>
                <div>
                    <div className='job-details'>
                        <h3>Job Details</h3>
                        <hr />
                        <div className='flex items-center gap-3 mb-4'>
                            <img src={salary} alt="salary" />
                            <h6>{jobDetails.salary}</h6>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={title} alt="job title" />
                            <h6>Job Title : <span>{jobDetails.job_title}</span></h6>
                        </div>

                        <h3>Contact Information</h3>
                        <hr />
                        <div className='flex items-center gap-3 mb-4'>
                            <img src={phone} alt="phone" />
                            <h6>Phone : <span>{jobDetails.phone}</span></h6>
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <img src={email} alt="email" />
                            <h6>Email : <span>{jobDetails.email}</span></h6>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={address} alt="Address" />
                            <h6>Address : <span>{jobDetails.address}</span></h6>
                        </div>
                    </div>

                    <Link to='/appliedJobs'>
                    <button onClick={() => handleAddJobToStorage(jobDetails.id)} className='btn-primary w-full'>Apply Now</button>
                    </Link>

                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;