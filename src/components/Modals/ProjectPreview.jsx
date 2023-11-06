import React from 'react';
import Modal from 'react-modal';
import CardImg from '../Cards/CardImg';
import CardDescription from '../Cards/CardDescription';
import SkillCard from '../Cards/SkillCard';
import CardSpan from '../Cards/CardSpan';

const ProjectPreview = ({ item,modalIsOpen,closeModal }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.

    };
    return (
        <Modal
            isOpen={modalIsOpen}
            contentLabel="Project Preview"
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // appElement={'el'}
            className=" fixed top-[12%] left-3 right-3 h-4/5 border-0 overflow-y-scroll scroll-bar-hidden rounded-2xl border-x-2 border-b-2 border-gray-800 z-50 bg-black"
            overlayClassName="bg-[#fff]"
        >
            <div
                className='p-2 min-w-full max-w-3xl 
                    border-none bg-black rounded-lg '
            >
                <div className=' md:hidden'>
                    <CardImg
                        img={item.img}
                    />
                </div>
                <section className='py-4 px-2 text-white  '>
                    <h2 className=' text-2xl lg:text-4xl mb-2 font-semibold whitespace-nowrap'>
                        {item?.name}
                    </h2>
                    <section className='ml-2 lg:ml-6'>
                        <p>
                            <span className='font-bold text-xl'>
                                Project Demo :
                            </span>
                            <br />
                            <a className='font-semibold underline cursor-pointer text-gray-400' href={item.demo}>
                                {item.demo}
                            </a>
                        </p>
                        <p className='mb-2'>
                            <span className='font-bold text-xl'>
                                Github Repository :
                            </span>
                            <br />
                            <a className='font-semibold underline cursor-pointer text-gray-400' href={item.github}>
                                {item.github}
                            </a>
                        </p>
                    </section>
                    <section className='my-6 flex flex-wrap'>
                        <h3 className=' basis-full text-xl font-bold mb-1 ml-1'>Used Tech</h3>
                        <ul className='mt-2 ml-2'>
                            {
                                item?.techs !== undefined &&
                                item?.techs.map((e,i) => (
                                    <li
                                        key={i}
                                        className=' inline-block my-1.5'>
                                        <CardSpan
                                            e={e}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <article className='flex flex-wrap'>
                        <span className='my-2 font-bold text-xl whitespace-nowrap'>
                            Project {item.des?.header}:
                        </span>
                        <section className='ml-3 text-lg capitalize text-gray-400'>
                            <p>
                                {item.des?.body}
                            </p>
                            {
                                item.des?.list &&
                                <ul className=' list-item'>
                                    {
                                        item.des?.list?.map((e,i) => (
                                            <li key={i} className='my-2'>
                                                <span className={'font-bold text-slate-100'}>
                                                    {e.Name} :
                                                </span>
                                                {e.body}
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </section>
                    </article>
                </section>
            </div>
            <button
                className='fixed bottom-[10%] md:bottom-auto md:top-[15%] right-8 bg-red-500 px-2 py-1 rounded-lg font-bold cursor-pointer'
                onClick={closeModal}>
                close
            </button>
        </Modal>
    );
};

export default ProjectPreview;