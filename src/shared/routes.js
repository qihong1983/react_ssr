import React from "react";



import App from "../shared/App";
// import Login from '../shared/Login';
// import KpiReport from '../shared/kpireport';
// import OpenData from '../shared/openData';



//用户概况
// const App = (location, cb) => {
// 	require.ensure([], require => {
// 		cb(null, require('../shared/App').default)
// 	}, '/')
// }


const Login = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../shared/Login').default)
	}, 'login')
}

const KpiReport = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../shared/kpireport').default)
	}, 'kpireport')
}


const OpenData = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('../shared/openData').default)
	}, 'getdata')
}


import {
	match,
	RoutingContext,
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Redirect,
	browserHistory
} from 'react-router';

// const Routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App}></Route>
// 	</Router>
// );



const Routes = (
	<div>
		<Route path="/" component={App}></Route>
		<Route path="/kpireport" getComponent={KpiReport}></Route>
		<Route path = "/login" getComponent= {Login}></Route>
		<Route path = "/getdata" getComponent = {OpenData}></Route>
	</div>
);



export default Routes;