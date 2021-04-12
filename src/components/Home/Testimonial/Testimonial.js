import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import client1 from '../../../images/Ellipse 1.png';
import client2 from '../../../images/Ellipse 2.png';
import client3 from '../../../images/Ellipse 3.png';
import TestimonialDetail from './TestimonialDetail';

const Testimonial = () => {
    const testimonialData = [
        {
            name : 'Winson Herry',
            address: 'California',
            image: client1
        },
        {
            name : 'Winson Herry',
            address: 'California',
            image: client2
        },
        {
            name : 'Winson Herry',
            address: 'California',
            image: client3
        }
    ]
    return (
        <section className='testimonial'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8">
                        <h4 className='mb-4' style={{color: '#6acece'}}>TESTIMONIAL</h4>
                        <h1>What's Our Patients <br/> Say</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <FontAwesomeIcon style={{fontSize: '150px', color: '#d6f6f6'}} icon={faQuoteLeft} />
                    </div>
                </div>
                <div className="row py-5">
                    {
                        testimonialData.map(testimonial => <TestimonialDetail key={testimonial.image} testimonial={testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;