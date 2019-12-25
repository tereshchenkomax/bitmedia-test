import React, {useState, useEffect} from 'react';
import Header from "../../Header";
import {Breadcrumbs, BreadcrumbsItem} from "react-breadcrumbs-dynamic";

const SingleUserPage = (props) => {
	console.log(props);
	return (
		<div>
			<Header/>
			<Breadcrumbs
				separator={<b> > </b>}
				finalItem={'b'}
				duplicateProps={{to: 'href'}}
			/>

			<BreadcrumbsItem to='/'>Main page</BreadcrumbsItem>
			<BreadcrumbsItem to='/users'>User statistics</BreadcrumbsItem>
			<BreadcrumbsItem to='/user/1'>SingleUserPage</BreadcrumbsItem>
		</div>
	);
};

export default SingleUserPage;
