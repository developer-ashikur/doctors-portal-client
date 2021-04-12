import React from 'react';
import doctor1 from '../../../images/doctor-sm.png';
import DoctorDetails from './DoctorDetails';

const Doctors = () => {
    const doctorsData = [
        {
            name: 'Dr. Caudi',
            phone: '+88017112233',
            image: doctor1
        },
        {
            name: 'Dr. Jhon',
            phone: '+88017112233',
            image: doctor1
        },
        {
            name: 'Dr. Mark',
            phone: '+88017112233',
            image: doctor1
        }
    ]
    return (
        <section>
            <div className="container">
                <h4 style={{color: '#6acece'}} className='text-center'>OUR DOCTORS</h4>
                <div className="row py-5">
                    {
                        doctorsData.map(doctor => <DoctorDetails key={doctor.name} doctor={doctor}></DoctorDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;