import React from 'react';
import Highlight from 'react-highlight';

const CodeDisplay = ({ code }) => {
    return (
        <div>
            <Highlight className='javascript'>
                {`${code}`}
            </Highlight>
        </div>
    );
};

export default CodeDisplay;