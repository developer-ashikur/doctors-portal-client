import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='text-center py-5 contact'>
            <div className="container">
                <div>
                    <h4 style={{color: '#6acece'}}>CONTACT US</h4>
                    <h1 className='text-white'>Always Connected With Us</h1>
                </div>
                <form action="" className='py-5'>
                    <input type="email" name="" placeholder='Email*' className='form-control py-5 font-weight-bold' id=""/>
                    <input type="text" name="" placeholder='Subject*' className='form-control my-4 py-5 font-weight-bold' id=""/>
                    <textarea name="" className='form-control py-5 font-weight-bold' placeholder='Your Message*' id="" ></textarea>
                    <button className="default-btn my-4">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;