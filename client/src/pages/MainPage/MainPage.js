import React, {Fragment} from 'react';
import Header from "../../Header";
import IphoneSection from "./IphoneSection";
import FeaturesSection from "./FeaturesSection";
import LaptopSection from "./LaptopSection";
import Pricing from "./Pricing";
import Subscription from "../../components/Subscription";


const MainPage = () => {
	return (
		<Fragment>
			<div className='wavy-background'>
				<Header noBg={true}/>
				<IphoneSection/>
			</div>
			<FeaturesSection/>
			<LaptopSection/>
			<Pricing/>
			<Subscription/>
		</Fragment>
	);
};

export default MainPage;
