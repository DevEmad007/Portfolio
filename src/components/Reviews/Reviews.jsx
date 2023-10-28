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
        window.setInterval(handleslide,6000);
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

    return (
        <div className='lg:grid lg:grid-cols-80/20 lg:px-10'>
            <div className={`m-4  overflow-hidden lg:pl-12`}>
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
                <h3 className='mb-4 text-xl font-bold tracking-wider '>What People saying</h3>
                <ul className=' flex flex-col gap-1'>
                    {
                        otherReviews.map((e,i) => (
                            <li
                                className='p-2 text-lg 
                                font-semibold 
                                flex justify-between items-center 
                                border-b border-gray-600 ' key={i}>
                                <div>
                                    {e?.name}
                                    <p className='font-normal text-base text-gray-300'>{e?.des}</p>
                                </div>
                                <div className='h-4 w-4 border-b-2 border-l-2 rotate-225'></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Reviews;