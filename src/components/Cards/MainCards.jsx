import React from 'react';
import CardImg from './CardImg';
import CardDescription from './CardDescription';
import ProjectPreview from '../Modals/ProjectPreview';

const MainCards = ({ item }) => {
    const [ modalIsOpen,setIsOpen ] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                onClick={openModal}
                itemType='button'
                className='my-2 sm:my-0 min-w-full max-w-xl cursor-pointer border-none '
            >
                <CardImg
                    img={item.img}
                />
                <CardDescription
                    item={item}
                />
            </div>
            <ProjectPreview
                item={item}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </>
    );
};

export default MainCards;
