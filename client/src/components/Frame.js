import React from 'react';

const Frame = (props) => {
    return (
        <div className='col-1-of-3'>
            <div className="frame">
                {props.children}
            </div>
        </div>
    );
};

export default Frame;