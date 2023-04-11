import React from 'react';
import './GeneralBanner.css';

const GeneralBanner = ({children}) => {
    return (
        <div className='general-banner'>
            {children}
        </div>
    );
};

export default GeneralBanner;