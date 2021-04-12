import React from 'react';
import chair from '../../../images/Mask Group 1.png';

const HeaderMain = () => {
    return (
        <div style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3a4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur deleniti aliquid tenetur tempora alias quisquam ea incidunt quibusdam fuga voluptates voluptatem et, odio exercitationem quidem, obcaecati esse saepe quaerat.</p>
                <button className="default-btn">GET STARTED</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;