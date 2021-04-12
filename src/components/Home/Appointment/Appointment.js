import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <section className='appointment-container my-5'>
           <div className="container">
               <div className="row">
                   <div className="col-lg-6 g-4">
                       <img src={doctor} alt="" className="img-fluid appointment-img"/>
                   </div>
                   <div className="col-lg-6 g-4 py-5">
                       <h4 style={{color: '#6acdcd'}}>APPOINTMENT</h4>
                       <h1 className='py-5 text-white'>Make an Appointment <br/> Today</h1>
                       <p className='mb-5 text-white lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem officia, a eos quo facilis.</p>
                       <button className="default-btn">Learn More</button>
                   </div>
               </div>
            </div> 
        </section>
    );
};

export default Appointment;