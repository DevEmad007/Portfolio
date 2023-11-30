import React from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsDb } from '../Database/db';

const BlogeDetails = () => {
    const param = useParams('blogs/:id');
    const blog = ReviewsDb.find(item => item.id == param.id);

    return (
        <div className={'bg-black text-white  p-5'}>
            <h2 className='text-3xl xl:text-3xl font-semibold tracking-wide mb-2'>
                {blog.name}
            </h2>
            <article>
                <section >
                    {blog.testimonial}
                </section>
            </article>
        </div>
    );
};

export default BlogeDetails;