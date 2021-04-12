import React from 'react';

const ServiceDetail = ({service}) => {
    const {title, image} = service;
    return (
        <div className='col-md-4 g-4'>
            <div>
                <img src={image} className='img-fluid w-25' alt=""/>
                <h4 className='py-4'>{title}</h4>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime.</p>
            </div>
        </div>
    );
};

export default ServiceDetail;