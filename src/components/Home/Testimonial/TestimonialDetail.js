import React from 'react';

const TestimonialDetail = ({testimonial}) => {
    const {name, address, image} = testimonial;
    return (
        <div className='col-md-4'>
            <div className='shadow p-5 rounded'>
                <p className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur distinctio sequi a excepturi vero impedit rerum beatae expedita quisquam! A eaque deleniti explicabo delectus reprehenderit eveniet ipsam praesentium quo?</p>
                <div className='pt-4'>
                    <div className="row">
                        <div className="col-md-4 g-4">
                            <img src={image} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8 g-4">
                            <h4 style={{color: '#6acece'}}>{name}</h4>
                            <p className='lead font-weight-bold text-secondary'>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;