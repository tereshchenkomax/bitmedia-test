import React from 'react';
import macbook from '../../icons/macbook.svg'
import Button from "../../components/Button";

const LaptopSection = () => {
    return (
        <section className='laptop-section'>
            <div className='row'>
                <div className="col-1-of-2">
                    <h3 className='is-white has-margin-top-large'>Start Managing your apps business, more
                        faster</h3>
                    <p className='has-margin-top-medium'>
                        Objectively deliver professional value with diverse web-readiness. Collaboratively
                        transition
                        wireless customer service without goal-oriented catalysts for change. Collaboratively.
                    </p>
                    <Button>Learn More</Button>
                </div>
                <div className="col-1-of-2">
                    <img className='laptop-mac' src={macbook} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default LaptopSection;