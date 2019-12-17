import React, {useState, useEffect} from 'react';
import Header from "../../Header";
import IphoneSection from "./IphoneSection";

const MainPage = () => {
	return (
		<div className='wavy-background'>
			<Header noBg={true}/>
			<IphoneSection/>
		</div>
	);
};

export default MainPage;
