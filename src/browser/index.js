import React from "react";
import {
	render
} from "react-dom";



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


//这些是后加的开始
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';

import {
	connect,
	Provider
} from 'react-redux';


import Routes from "../shared/routes";

import "../shared/App.css";

import {
	syncHistoryWithStore,
	routerReducer
} from 'react-router-redux';


const thunk = require('redux-thunk').default;


const urlpa = (state, action) => {
	if (typeof state === "undefined") {
		return {
			url: '/data/userprofile'
		};
	}

	switch (action.type) {
		case "urlpa":
			return Object.assign({}, state, {
				url: action.payload
			});
			break;
		default:
			return state;
	}
}

import {
	List
} from '../reducers/userprofile/list';


import {
	Login
} from '../reducers/login/login';


import {
	KpiList
} from '../reducers/kpireport/kpilist';

import {
	OpenList
} from '../reducers/opendata/list';


const reducer = combineReducers({
	List,
	Login,
	KpiList,
	OpenList,
	urlpa,
	routing: routerReducer
});


console.log(window, 'globaltoken');

console.log(window, 'window');



const store = createStore(reducer, window.__INITIAL_STATE__,
	applyMiddleware(thunk));


const history = syncHistoryWithStore(browserHistory, store);

//这些是后加的结束
class Client extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{Routes}</div>
		);
	}
}



match({
	// history: browserHistory,
	history: history,
	routes: Routes
}, (error, redirectLocation, renderProps) => {
	const {
		location
	} = renderProps
	render(
		<Provider store = {store}>
			<Router history={history} {...renderProps}>
		    	{Routes}
		    </Router>
	    </Provider>,
		document.getElementById("root")
	)
});



// console.log(process.env.NODE_ENV, '客户端');
// render(<Client />, document.getElementById("root"));