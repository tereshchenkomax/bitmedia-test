import React from 'react';
import {Link} from "react-router-dom";

const Button = ({children, url}) => {
	return (
		<Link className='btn btn--white' to={url}>
			{children}
		</Link>
	);
};

export default Button;
