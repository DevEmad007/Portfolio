import Review from './Review';
import { useEffect,useRef,useState } from 'react';

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
                        return 0;
                    } else {
                        return curr + 1;
                    }
                });
            }
        };
        window.setInterval(handleslide,4000);
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
        <>
            <div className={`m-4 overflow-hidden`}>
                <div
                    ref={elementRef}
                    className={`flex gap-3 ${animate()}  duration-700 `}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>

        </>
    );
};

export default Reviews;