import React from 'react';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorDetails = ({doctor}) => {
    const {name, phone, image} = doctor;
    return (
        <div className='col-md-4 g4 text-center'>
            <div>
                <img src={image} alt="" className="img-fluid"/>
                <h5 className='pt-4'>{name}</h5>
                <p><FontAwesomeIcon style={{color: '#6acece'}} icon={faPhoneAlt} /> {phone}</p>
            </div>
        </div>
    );
};

export default DoctorDetails;