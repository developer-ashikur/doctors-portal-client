import React from 'react';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

const Footer = () => {
    return (
        <footer className=''>
            <div className="main-footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 g-4">
                            <ul className='text-secondary font-weight-bold list-unstyled'>
                                <li className='mb-3 mt-5'>Emergency Dental Care</li>
                                <li className='mb-3'>Check Up</li>
                                <li className='mb-3'>Treatment of Personal Diseases</li>
                                <li className='mb-3'>Tooth Extraction</li>
                                <li>Check Up</li>
                            </ul>
                        </div>
                        <div className="col-md-3 g-4">
                            <h4 style={{color: '#6acece'}}>Services</h4>
                        <ul className='text-secondary font-weight-bold list-unstyled'>
                                <li className='mb-3 mt-4'>Emergency Dental Care</li>
                                <li className='mb-3'>Check Up</li>
                                <li className='mb-3'>Treatment of Personal Diseases</li>
                                <li className='mb-3'>Tooth Extraction</li>
                                <li className='mb-3'>Check Up</li>
                                <li className='mb-3'>Check Up</li>
                                <li>Check Up</li>
                            </ul>
                        </div>
                        <div className="col-md-3 g-4">
                        <h4 style={{color: '#6acece'}}>Oral Health</h4>
                        <ul className='text-secondary font-weight-bold list-unstyled'>
                                <li className='mb-3 mt-4'>Emergency Dental Care</li>
                                <li className='mb-3'>Check Up</li>
                                <li className='mb-3'>Treatment of Personal Diseases</li>
                                <li className='mb-3'>Tooth Extraction</li>
                                <li className='mb-3'>Check Up</li>
                                <li className='mb-3'>Check Up</li>
                                <li>Check Up</li>
                            </ul>
                        </div>
                        <div className="col-md-3 g-4">
                        <h4 style={{color: '#6acece'}}>Our Address</h4>
                        <p className='text-secondary font-weight-bold mt-4'>Rajbari, Dhaka, Bangladesh</p>
                        <div className="social-menu">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faGooglePlusG} /></li>
                            </ul>
                        </div>
                        <div className='pt-5'>
                            <p className='text-secondary font-weight-bold'>Call Now</p>
                            <button className="default-btn">+88017112233</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer">
                <h5 className='text-center text-secondary font-weight-bold py-3'>Copyright {new Date().getFullYear()} All Rights Reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;