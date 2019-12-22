import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Header = ({noBg}) => {
    return (
        <Fragment>
            <header className={noBg ? 'is-bg-transparent' : null}>
                <div className="row">
                    <Link to='/'>
                        <div className='has-padding-bottom-large has-padding-top-large'>
                            <h1 className='logo-text'>AppCo</h1>
                        </div>
                    </Link>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
