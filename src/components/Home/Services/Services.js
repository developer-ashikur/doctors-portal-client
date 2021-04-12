import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import whitening from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const services = [
        {
            title: 'Fluoride Treatment',
            image: fluoride
        },
        {
            title: 'Cavity Filling',
            image: cavity
        },
        {
            title: 'Teeth Whitening',
            image: whitening
        }
    ]
    return (
        <section className='container text-center'>
            <div className="py-4">
                <h4 className='py-3' style={{color: '#1cc7c1'}}>OUR SERVICES</h4>
                <h1>Services We Provide</h1>
            </div>
            <div className="row py-5">
                {
                    services.map(service => <ServiceDetail key={service.title} service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;