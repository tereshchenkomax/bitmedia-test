import React, {Fragment} from 'react';

const Header = ({noBg}) => {
	return (
		<Fragment>
			<header className={noBg ? 'is-bg-transparent':  null}>
				<div className="row">
					<h1 className='logo-text'>AppCo</h1>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
