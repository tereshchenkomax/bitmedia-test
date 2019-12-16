import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleUserPage from './pages/SingleUserPage/'
import UsersPage from './pages/UsersPage/'
import MainPage from './pages/MainPage/'


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={MainPage}/>
				<Route exact path='/users/' component={UsersPage}/>
				<Route exact path='/user/:id' component={SingleUserPage}/>
			</Switch>
		</Router>
	);
};

export default Routes;
