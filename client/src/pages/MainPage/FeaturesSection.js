import React from 'react';
import Frame from "../../components/Frame";
import candles from "../../icons/candles.svg"
import lock from "../../icons/lock.svg"
import devices from "../../icons/devices.svg"

const FeaturesSection = () => {
    return (
        <section className='features has-margin-bottom-large' >
            <h2 className='u-center-text is-black has-margin-top-medium has-margin-bottom-large'> Why <strong>small business owners love</strong> AppCo?</h2>
            <p className='u-center-text paragraph paragraph-gray has-margin-bottom-large'>
                Our design projects are fresh and simple and will benefit your business greatly. Learn more about our
                work!
            </p>
            <div className="row">
                <Frame>
                    <img src={candles} alt="" className='icon-img has-margin-bottom-huge'/>
                    <h4 className='u-center-text is-black'>Clean Design</h4>
                    <p className='u-center-text paragraph-gray has-margin-top-medium'>
                        Increase sales by showing true dynamics of your website.
                    </p>
                </Frame>
                <Frame>
                    <img src={lock} alt="" className='icon-img has-margin-bottom-huge'/>
                    <h4 className='u-center-text is-black'>Secure Data</h4>
                    <p className='u-center-text paragraph paragraph-gray has-margin-top-medium'>
                        Build your online store’s trust using Social Proof & Urgency
                    </p>
                </Frame>
                <Frame>
                    <img src={devices} alt="" className='icon-img has-margin-bottom-huge'/>
                    <h4 className='u-center-text is-black'>Retina Ready</h4>
                    <p className='u-center-text paragraph paragraph-gray has-margin-top-medium'>
                        Realize importance of social proof in customer’s purchase decision.
                    </p>
                </Frame>
            </div>
        </section>
    );
};

export default FeaturesSection;