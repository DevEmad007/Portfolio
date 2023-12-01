import React from 'react';
import { Link } from 'react-router-dom';
import DisplayList from '../DisplayList/DisplayList';

const Review = ({ className,item }) => {
    return (
        <Link reloadDocument to={`/blogs/${item?.id}`}
            className={`${className} min-w-260 max-w-3xl max-h-56 xl:max-h-72 relative rounded-3xl bg-white overflow-hidden dark:bg-slate-900`}>
            <div
                className=' text-black dark:text-white p-3 lg:pt-1 xl:pt-2'>
                <h4
                    className='text-2xl xl:text-3xl font-semibold tracking-wide mb-[8px] lg:mb-[0px] '>
                    {item?.name}
                </h4>
                <div className=' truncate whitespace-break-spaces ml-1 md:ml-2'>
                    {item?.blog?.section?.map((item,index) =>
                        <div key={index}>
                            <section key={index} >
                                <p >{item?.p}</p>
                            </section>
                            <section>
                                <DisplayList list={item?.ul} />
                            </section>
                            {/* <CodeDisplay code={item.code} /> */}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Review;