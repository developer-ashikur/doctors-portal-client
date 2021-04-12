import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessInfoCard = ({businessInfo}) => {
    const {title, subtitle, icon, color} = businessInfo;
    return (
        <div className="col-md-4">
            <div className='d-flex justify-content-center align-items-center p-5' style={{backgroundColor: `${color}`, color: 'white', borderRadius: '5px', height: '140px'}}>
                <FontAwesomeIcon icon={icon} style={{fontSize: '50px', marginRight: '15px'}} />
                <div className="business-info-container">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoCard;