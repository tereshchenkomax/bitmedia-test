import React , {Fragment} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="row flex flex-space-between has-padding-bottom-medium has-padding-top-medium">
                    <Link to='/' >
                        <h4 className='logo-text'>AppCo</h4>
                    </Link>
                    <p>
                        All rights reserved by ThemeTags
                    </p>
                    <p>
                        Copyrights © 2019
                    </p>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;