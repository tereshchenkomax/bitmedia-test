import React from 'react';

const Button = ({text}) => {
	return (
		<a className='btn btn--white' href='#'>
			{text}
		</a>
	);
};

export default Button;
