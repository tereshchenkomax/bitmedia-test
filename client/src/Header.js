import React, {Fragment} from 'react';

const Header = ({noBg}) => {
    return (
        <Fragment>
            <header className={noBg ? 'is-bg-transparent' : null}>
                <div className="row">
                    <div className='has-padding-bottom-medium has-padding-top-medium'>
                        <h1 className='logo-text'>AppCo</h1>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
