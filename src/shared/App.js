import React from 'react';



import {
	connect
} from 'react-redux';

import logo from './logo.svg';
import "./App.css";


// require('es6-promise');
// require('isomorphic-fetch');

// import 'whatwg-fetch';


import 'isomorphic-fetch';
import {
	match,
	RoutingContext,
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Redirect,
	Link,
	browserHistory
} from 'react-router';

//后加的开始
import {
	bindActionCreators
} from 'redux';

import * as actionCreators from '../actions/userprofile/list';



//后加的结束


import cookie from 'react-cookies';

function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function(key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function(val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userProfileData: []
		}
	}

	componentWillMount() {

		// console.log(window, '@@@@@222');
		// debugger;

		var token = cookie.load('token');

		// console.log(token, 'token');
		// console.log(fetch, 'fetch');

		// console.log(cookieParser, 'cookieParser');

		if (global.token) {
			token = global.token;
		} else {
			token = cookie.load('token');
		}

		if (token == undefined) {
			this.props.router.push('/login');
		} else {
			// this.props.ActionList(token, this.props);
		}

	}

	componentDidMount() {



		console.log(this.props, '看一看props');
		// this.getUserProfile();


		var token = cookie.load('token');



		if (global.token) {
			token = global.token;
		} else {
			token = cookie.load('token');
		}


		console.log(this.props.login, 'this.props.login');

		if (token == undefined) {
			this.props.router.push('/login');
		} else {

			if (!this.props.login) {
				this.props.router.push('/login');
			} else {
				this.props.ActionList(token, this.props);
			}

		}

		// if (this.props.ListList.length == 0) {
		// 	this.props.ActionList(token, this.props);
		// }



	}


	getUserProfile() {
		var token = cookie.load('token');

		// console.log(token, 'token');
		// console.log(fetch, 'fetch');

		// console.log(cookieParser, 'cookieParser');

		if (global.token) {
			token = global.token;
		} else {
			token = cookie.load('token');
		}


		if (token == undefined) {
			this.props.router.push('/login');
		}
		fetch("http://127.0.0.1:3001/user_profile_list?appCode=27&online=1", {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer ' + token
			}

		}).then(function(res) {
			res.json().then(res => {
				if (res.status) {
					// console.log(res.data);


					this.setState({
						userProfileData: res.data
					});

				} else {
					console.log(11);
					if (res.msg == -1) {

						// console.log(this.props.router.push('/login'));

						this.props.router.push('/login');
					}
				}
			});
		}.bind(this));



	}


	getTmp() {
		var list = [];
		// this.state.userProfileData.map((v, k) => {
		this.props.ListList.map((v, k) => {
			list.push(<tr key={k}>
				<td>{v.date}</td>

				<td>{v.newUsers}</td>

				<td>{v.activeUser}</td>

				<td>{v.id}</td>
				</tr>);
		});
		return list;
	}


	render() {


		// console.log(this.props, 'propsprops');
		// console.log(actionCreators, 'actionCreators');
		// console.log(this.state.userProfileData, 'this.state.userProfileData11');

		var dataTmp = this.getTmp();

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>react同构直出demo</h2>
				</div>
				<p className="App-intro">是不是很酷？ 用户概况</p>
				<div className="left">
					<Link to="/">用户概况</Link>
					<Link to="/kpireport">KPI报表</Link>
					<Link to ="/login">登录</Link>
					<Link to ="/getdata">开放型数据</Link>
					
				</div>

				<div className="right">
					<table>
						<thead>

						<tr>
							<td>日期</td>
							<td>新增用户</td>
							<td>活跃用户</td>
							<td>操作</td>
						</tr>

						</thead>
						<tbody>
							{dataTmp}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}



//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	console.log(state, 'statestate');
	return {
		ListList: state.List.tableList,
		os: state.List.os,
		login: state.Login.login,
		urlpa: state.urlpa,
		url: state.urlpa.url
	}
};


//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {

	//全量
	return bindActionCreators(actionCreators, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);