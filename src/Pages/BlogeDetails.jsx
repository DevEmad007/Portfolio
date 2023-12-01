import React from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsDb } from '../Database/db';
import CodeDisplay from '../components/CodeDisplay/CodeDisplay';
import Highlight from 'react-highlight';
import DisplayList from '../components/DisplayList/DisplayList';

const BlogeDetails = () => {
    const param = useParams('blogs/:id');
    const blog = ReviewsDb.find(item => item.id == param.id);

    return (
        <div className={'bg-black text-white  p-5'}>
            <h2 className='text-3xl xl:text-3xl md:pl-24 md:-ml-3 font-semibold tracking-wide mb-2 '>
                {blog.name}
            </h2>
            <article className='text-xl md:mx-24'>
                {blog?.blog.section?.map((item,index) =>
                    <div key={index}>
                        <section key={index} >
                            <h2 className='ml-2 mb-2 text-2xl font-semibold'>{item.header}</h2>
                            <p className='ml-6 mb-2 text-slate-400'>{item?.p}</p>
                        </section>
                        <section>
                            <DisplayList list={item?.ul} />
                        </section>
                        {/* <CodeDisplay code={item.code} /> */}
                    </div>
                )}
            </article>
        </div>
    );
};

export default BlogeDetails;