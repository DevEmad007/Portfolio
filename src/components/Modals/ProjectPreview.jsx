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
            className=" fixed top-[12%] left-3 right-3 h-4/5 border-0 overflow-y-scroll rounded-b-2xl border-x-2 border-b-2 border-gray-800"
            overlayClassName="bg-[#fff]"
        >
            <div
                className='p-2 min-w-full max-w-3xl 
                    border-none bg-black rounded-lg '
            >
                <CardImg
                    img={item.img}
                />
                <section className='py-4 px-2 text-white  '>
                    <h2 className=' text-2xl mb-2 font-semibold whitespace-nowrap'>
                        {item?.name}
                    </h2>
                    <p>
                        <span className='font-bold'>
                            Project Demo :
                        </span>
                        <br />
                        <a className='font-semibold underline cursor-pointer text-gray-400' href={item.demo}>
                            {item.demo}
                        </a>
                    </p>
                    <p className='mb-2'>
                        <span className='font-bold'>
                            Github Repository :
                        </span>
                        <br />
                        <a className='font-semibold underline cursor-pointer text-gray-400' href={item.github}>
                            {item.github}
                        </a>
                    </p>
                    <section className='my-6 flex flex-wrap'>
                        <h3 className=' basis-full text-xl font-bold mb-1 ml-1'>Used Tech</h3>
                        {
                            item?.techs !== undefined &&
                            item?.techs.map((e,i) => (
                                <CardSpan
                                    key={i}
                                    e={e}
                                />
                            ))
                        }
                    </section>
                    <article className='flex flex-wrap'>
                        <span className='my-2 font-bold text-xl whitespace-nowrap'>
                            Project {item.des?.header}:
                        </span>
                        <p className=' text-lg capitalize text-gray-400'>
                            {item.des?.body}
                            {
                                item.des?.list &&
                                <ul className=' list-item'>
                                    {
                                        item.des?.list?.map((e,i) => (
                                            <li key={i} className='my-2'>
                                                <span className={'font-bold'}>
                                                    {e.Name} :
                                                </span>
                                                {e.body}
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </p>
                    </article>
                </section>
                <div className=' mr-5 my-4 xl:flex justify-end items-center hidden '>
                    <button
                        className='bg-red-400 py-2 px-4 font-bold'
                        onClick={closeModal}>
                        close
                    </button>
                </div>
            </div>

            <button
                className='fixed bottom-[10%] right-8 bg-red-500 px-2 py-1 rounded-lg font-bold cursor-pointer'
                onClick={closeModal}>
                close
            </button>
        </Modal>
    );
};

export default ProjectPreview;