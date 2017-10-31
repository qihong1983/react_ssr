import express from "express";

import React from "react";
import {
	renderToString
} from "react-dom/server";

// import App from "../shared/App";
const app = express();

var appRouter = express.Router();

import 'isomorphic-fetch';

app.use(express.static("public"));

import cookieParser from "cookie-parser";
app.use(cookieParser());



import {
	match,
	RoutingContext,
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Redirect,
	browserHistory,
	RouterContext
} from 'react-router'

import Routes from "../shared/routes";


// console.log(Routes);

// require('es6-promise').polyfill();
require('isomorphic-fetch');

//后加的开始
import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';

import {
	connect,
	Provider
} from 'react-redux';

import {
	syncHistoryWithStore,
	routerReducer
} from 'react-router-redux';

const thunk = require('redux-thunk').default;

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



// console.log(List, 'List');
import {
	ActionList
} from '../actions/userprofile/list';

import {
	KpiListFn
} from '../actions/kpireport/kpireport';

import {
	getOpenData
} from '../actions/opendata/opendata';

// console.log(ActionList, 'ActionList');

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

// console.log(List, 'List');

const reducer = combineReducers({
	List,
	Login,
	KpiList,
	OpenList,
	urlpa,
	routing: routerReducer
});


//后加的结束



app.get('*', function(req, res, next) {


	global.token = req.cookies.token;



	match({
		history: browserHistory,
		routes: Routes,
		location: req.url
	}, function(error, redirectLocation, renderProps) {


		if (error) {
			console.log('错误500');
			res.send(500, error.message)

		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {


			if (global.token) {
				token = global.token;
			}

			const store = createStore(reducer, {},
				applyMiddleware(thunk));


			// console.log(store, 'storestore');

			const state = store.getState();

			// console.log(state, 'statestate');

			// console.log(global, 'global');

			// const history = syncHistoryWithStore(browserHistory, store);

			var data;
			switch (req.url) {
				case '/':
					if (!global.token) {
						res.redirect('/login');
					}
					data = [
						store.dispatch(ActionList(token, store.getState()))
					]
					break;
				case '/kpireport':
					data = [store.dispatch(KpiListFn(token, store.getState()))]
					break;
				case '/login':
					data = [];
					break;
				case '/getdata':
					data = [store.dispatch(getOpenData(store.getState()))];
					break;
			}



			Promise.all(data).then(() => {

				res.send(`
				     <!DOCTYPE html>
				     <head>
				       <title>react首屏同构直出</title>
				       <link type="image/x-icon" href="http://gb.corp.163.com/favicon.ico" rel="shortcut icon" />
				       <link rel="stylesheet" href="/css/main.css">
				     </head>

				     <body>
				       <div id="root">${renderToString(<Provider store = {store}><RouterContext {...renderProps}  /></Provider>)}</div>
				          
						  <script>
					        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};
					      </script>

				          <script src="/vendor.js"></script>
				          <script src="/app.js"></script>


				     </body>

				   </html>
				 `);
			});

		} else {
			// res.status(404).end('Not found');
			res.redirect('/');
		}

	});

});


app.listen(process.env.PORT || 3000, () => {
	console.log("Server is listening");
});