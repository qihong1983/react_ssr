import React from 'react';



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


import cookie from 'react-cookies';

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as actionCreators from '../actions/kpireport/kpireport';

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


class KpiReport extends React.Component {

	constructor(props) {
		super(props);

		// this.state = {
		// 	kpiReportData: []
		// }
	}

	componentWillMount() {
		// this.getUserProfile();
	}

	componentDidMount() {

		console.log(this.props, '看一看props');

		var token = cookie.load('token');

		if (global.token) {
			token = global.token;
		} else {
			token = cookie.load('token');
		}

		if (token == undefined) {
			this.props.router.push('/login');
		} else {
			if (!this.props.login) {
				this.props.router.push('/login');
			} else {
				this.props.KpiListFn(token, this.props);
			}

		}
	}

	getTmp() {
		var list = [];

		this.props.kpiListData.map((v, k) => {
			list.push(<tr key={k}>
				<td>{v.appCode}</td>

				<td>{v.channelType}</td>


				<td>{v.online}</td>
				</tr>);
		});

		return list;
	}


	render() {

		console.log(this.props, 'props kpi');
		var dataTmp = this.getTmp();


		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>react同构直出demo</h2>
				</div>
				<p className="App-intro">是不是很酷？ KPI报表</p>
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
							<td>操作系统</td>
							<td>渠道类型</td>
							<td>线上线下</td>
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

	console.log(state, 'kpi date###');
	return {
		kpiListData: state.KpiList.KpiList,
		login: state.Login.login
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

export default connect(mapStateToProps, mapDispatchToProps)(KpiReport);