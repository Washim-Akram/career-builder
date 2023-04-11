import { Link } from "react-router-dom";

const AppliedJob = ({job}) => {
    const {compony_logo, job_title, compony_name, time, location, remote_or_onsite, salary, id} = job;
    return (
        <div className="mb-6">
            <li className='flex flex-col py-6 sm:flex-row sm:justify-between md:flex-row md:justify-between md:items-center border p-8 rounded-lg'>
        <div className='flex items-center'>
            <img
            className='w-60 h-60 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-100 mr-8 p-4'
            src={compony_logo}
            />
            <div>
                <h3 className='text-2xl font-bold mb-2'>{job_title}</h3>
                <h4 className='text-xl text-gray-400 font-medium mb-4'>{compony_name}</h4>
                <button className='btn-outlined mr-4'>{remote_or_onsite}</button>
                <button className='btn-outlined'>{time}</button>
                <p className='mt-4 mb-6 text-gray-400 font-medium'>
                <span className='mr-6'>Location: {location}</span>
                <span>{salary}</span> </p>
            </div>
        </div>
        <Link to={`../job/${id}`}>
                <button className='btn-secondary'>
                    View Details
                </button>
        </Link>
            </li>
        </div>
    );
};

export default AppliedJob;