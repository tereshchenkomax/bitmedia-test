import React from 'react';
import Button from "../../components/Button";
import {Link} from 'react-router-dom'
import iPhone from '../../iPhone.png'

const IphoneSection = () => {
	return (
		<section className='iphone-section'>
			<div className="row">
				<div className='col-1-of-2'>
					<div className="has-margin-top-large has-margin-bottom-large">
						<h1>
							<strong>Brainstorming</strong> for desired perfect Usability
						</h1>
					</div>

					<p className='paragraph'>
						Our design projects are fresh and simple and will benefit your business greatly. Learn more
						about
						our work!
					</p>

				<Link to='/users' label='Stats'>
					<Button text='View Stats'/>
				</Link>

				</div>
				<div className='col-1-of-2'>
					<div className='flex flex-center'>
						<img src={iPhone ? iPhone: null} alt="Iphone"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IphoneSection;
