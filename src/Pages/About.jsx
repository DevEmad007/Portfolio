import React from 'react';
import { about } from '../Database/db';

const About = () => {
    return (
        <div className='width-full flex justify-center text-xl pt-8 mx-6 capitalize '>
            <article>
                <section>
                    I'm <b> {about.name}</b>. currently studying in BBA major in <b>{about.Depertment}</b> at <b>{about.university}</b>. passion of programming and enthusiasm in tech with interest in Business psychology life is going on pretty good.
                </section>
                <section>
                    {about.description}
                </section>
            </article>
        </div>
    );
};

export default About;