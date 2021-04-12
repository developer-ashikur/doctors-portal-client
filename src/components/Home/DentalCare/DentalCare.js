import React from 'react';
import careImage from '../../../images/Mask Group 3.png'

const DentalCare = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6 g-4">
                    <img src={careImage} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 g-4">
                    <h1 className='mt-4'>Exceptional Dental <br/> Care, On Your Terms</h1>
                    <p className="lead py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur expedita repellat quod odit, corrupti sequi nesciunt quia provident, excepturi iusto rem voluptas quas laborum nemo nam. A deserunt nesciunt optio vero ex architecto, natus autem non dolores nobis ut, quas iusto error blanditiis! Beatae rem exercitationem earum ex, possimus omnis!</p>
                    <button className="default-btn">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;