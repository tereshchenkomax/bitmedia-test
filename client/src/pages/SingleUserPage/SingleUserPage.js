import React, {useState, useEffect} from 'react';
import Header from "../../Header";
import {Breadcrumbs, BreadcrumbsItem} from "react-breadcrumbs-dynamic";

const SingleUserPage = () => {
	return (
		<div>
			<Header/>
			<Breadcrumbs
				separator={<b> > </b>}
				finalItem={'b'}
				duplicateProps={{to: 'href'}}
			/>

			<BreadcrumbsItem to='/'>Home</BreadcrumbsItem>
			<BreadcrumbsItem to='/users'>Users</BreadcrumbsItem>
			<BreadcrumbsItem to='/user/1'>SingleUserPage</BreadcrumbsItem>
		</div>
	);
};

export default SingleUserPage;
