import React from 'react';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import client1 from '../../../images/Ellipse 1.png';
import client2 from '../../../images/Ellipse 2.png';
import BlogDetail from './BlogDetail';

const Blog = () => {
    const blogData = [
        {
            name: 'Dr. Caudi',
            date: '23 April 2021',
            title: '2 Times of Brush in a Day Can Keep You Healthy',
            image: client1
        },
        {
            name: 'Dr. Jhon Mitchel',
            date: '24 April 2021',
            title: 'The Tooth Cancer is Making a Challenge',
            image: client2
        }
    ]
    return (
        <section className='py-5'>
            <div className="container">
                <div className="text-center">
                    <h4 style={{color: '#6acece'}}>OUR BLOGS</h4>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="row py-5">
                    <div className="col-md-4 g-4">
                        <div className='p-5 shadow rounded text-white' style={{background: 'linear-gradient(to right top, #19d3b3, #00d3c3, #00d2d1, #00d1dd, #10cfe7)'}}>
                            <h4>Rashed Kabir</h4>
                            <h4>22 June 2021</h4>
                            <h2 className='py-5'>Check at least a doctor in a year for your teeth</h2>
                            <FontAwesomeIcon style={{fontSize : '30px'}} icon={faLongArrowAltRight} />
                        </div>
                    </div>
                    {
                        blogData.map(blog => <BlogDetail key={blog.image} blog={blog}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;