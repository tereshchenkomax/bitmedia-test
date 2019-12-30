import React from 'react';
import {Link} from "react-router-dom";

const Button = ({text, url}) => {
	return (
		<Link className='btn btn--white' to={url}>
			{text}
		</Link>
	);
};

export default Button;
