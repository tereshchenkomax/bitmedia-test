import React, {Fragment} from 'react';
import Candles from '../../icons/candles.png'
import Lock from '../../icons/lock.png'

const FeaturesCards = () => {
    return (
        <Fragment>

        </Fragment>
    );
};

const SingleCard = ({img, header, text}) => {
    return (
        <div className='col-1-of-3'>
            <img src={img} alt=""/>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
};

export default FeaturesCards;