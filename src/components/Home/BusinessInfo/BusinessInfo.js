import React from 'react';
import { faMapMarker, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import BusinessInfoCard from './BusinessInfoCard/BusinessInfoCard';

const BusinessInfo = () => {
    const businessInfoData = [
        {
            title: 'Opening Hours',
            subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            color: '#1cc7c1',
            icon: faClock
        },
        {
            title: 'Visit Our Location',
            subtitle: 'Rajbari, Dhaka, Bangladesh',
            color: '#3a4256',
            icon: faMapMarker
        },
        {
            title: 'Contact Us Now',
            subtitle: '+8801712233322',
            color: '#1cc7c1',
            icon: faPhoneAlt
        }
    ]
    return (
        <div className="mt-5 w-75 mx-auto">
            <div className='row'>
                {
                    businessInfoData.map(businessInfo => <BusinessInfoCard key={businessInfo.title} businessInfo={businessInfo}></BusinessInfoCard>)
                } 
            </div>
        </div>
    );
};

export default BusinessInfo;