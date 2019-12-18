import React from 'react';
import Button from "../../components/Button";
import iPhone from '../../iPhone.png'

const IphoneSection = () => {
	return (
		<section className='iphone-section'>
			<div className="row">
				<div className='col-2-of-3'>
					<div className="has-margin-top-medium has-margin-bottom-medium">
						<h1>
							<strong>Brainstorming</strong> for desired perfect Usability
						</h1>
					</div>

					<p>
						Our design projects are fresh and simple and will benefit your business greatly. Learn more
						about
						our work!
					</p>
					<Button text='View Stats'/>
				</div>
				<div className='col-1-of-3'>
					<div>
						<img src={iPhone} alt=""/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IphoneSection;