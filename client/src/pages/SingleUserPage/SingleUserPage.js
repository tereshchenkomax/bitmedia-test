import React, {useState, useEffect} from 'react';
import {Breadcrumbs, BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import request from "../../helpers/request";
import Header from "../../Header";
import Chart from "./Chart";

const SingleUserPage = ({location, match}) => {
	const {first_name, last_name} = location.state;
	const [loading, setLoading] = useState(false);
	// const [data, setData] = useState([]);

	useEffect(async () => {
		setLoading(true);
		const response = await request(`/usersendpoint/singleuser?userid=${match.params.id}&`);
		// const json = await response.json();
		// setData(json);
		setLoading(false)
	}, []);

	return (
		<div>
			<Header/>
			<div className='row'>
				<Breadcrumbs
					separator={<b> > </b>}
					finalItem={'b'}
					duplicateProps={{to: 'href'}}
				/>

				<BreadcrumbsItem to='/'>Main page</BreadcrumbsItem>
				<BreadcrumbsItem to='/users'>User statistics</BreadcrumbsItem>
				<BreadcrumbsItem to='/user/1'>{`${first_name} ${last_name}`}</BreadcrumbsItem>
				<Chart/>
			</div>
		</div>
	);
};

export default SingleUserPage;
