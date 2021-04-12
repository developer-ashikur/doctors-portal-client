import React from 'react';

const BlogDetail = ({blog}) => {
    const {name, date, title, image} = blog;
    return (
        <div className='col-md-4'>
            <div className='p-5 shadow rounded'>
                <div>
                    <div className="row">
                        <div className="col-md-4 g-4">
                            <img src={image} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8 g-4">
                            <h5>{name}</h5>
                            <h5 className='lead font-weight-bold text-secondary'>{date}</h5>
                        </div>
                    </div>
                </div>
                <h3 className='py-4'>{title}</h3>
                <p className='lead text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptates, vero deserunt soluta odit doloribus!</p>
            </div>
        </div>
    );
};

export default BlogDetail;