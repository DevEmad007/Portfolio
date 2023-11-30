import Review from './Review';
import { useEffect,useRef,useState } from 'react';
import { ReviewsDb } from '../../Database/db';
import { otherReviews } from '../../Database/db';

const Reviews = () => {
    const [ isVisible,setIsVisible ] = useState(false);
    const elementRef = useRef(null);
    const [ index,setIndex ] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Adjust this value as needed
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setIndex(curr => curr + 1);
                    observer.unobserve(elementRef.current);
                }
            });
        },options);
        observer.observe(elementRef.current);
        return () => {
            // Clean up the observer when the component unmounts
            observer.disconnect();
        };
    },[]);

    useEffect(() => {
        const handleslide = () => {
            if (isVisible) {
                setIndex(curr => {
                    if (curr >= 3) {
                        return 1;
                    } else {
                        return curr + 1;
                    }
                });
            }
        };
        window.setInterval(handleslide,10000);
        return () => {
            window.clearInterval(handleslide);
        };
    },[ isVisible ]);

    const animate = () => {
        switch (index) {
            case 1:
                return '-translate-x-s1';
                break;
            case 2:
                return '-translate-x-s2';
                break;
            case 3:
                return '-translate-x-s3';
                break;
            default:
                return '-translate-x-s0';
                break;
        }
    };

    const handleOpen = (e) => {
        const condition = e.currentTarget.classList.contains('h-[64px]');
        if (condition) {
            e.currentTarget.classList.replace('h-[64px]','h-auto');
        } else {
            e.currentTarget.classList.replace('h-auto','h-[64px]');
        }
    };

    return (
        <div className='lg:grid lg:grid-cols-80/20 lg:px-10'>
            <div className={`m-4  overflow-hidden lg:pl-12`}>
                <h3 className='text-2xl sm:-ml-[50px] font-bold tracking-wider mt-12 mb-6 '>
                    Blogs Preview
                </h3>
                <div
                    ref={elementRef}
                    className={`flex gap-3 ${animate()} duration-700 `}>
                    {
                        ReviewsDb.map((item) => (
                            <Review key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className='m-6 mt-16'>
                <h3 className='mb-4 text-xl font-bold tracking-wider '>
                    Favourite Quotes
                </h3>
                <ul className=' flex flex-col gap-1'>
                    {
                        otherReviews.map((e,i) => (
                            <li
                                onClick={handleOpen}
                                className={`pt-2 mb-2 text-lg h-[64px]
                                font-semibold overflow-hidden
                                flex justify-between duration-300
                                border-b border-gray-600 `} key={i}>
                                <div>
                                    {e?.name}
                                    <p className='font-normal text-base  text-gray-300'>{e?.des}</p>
                                </div>
                                <div className='h-4 w-4 mt-3 mr-2 border-b-2 border-l-2 rotate-225'></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Reviews;