import React from 'react';

import logo from './logo.svg';
import "./App.css";

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

import * as actionCreators from '../actions/opendata/opendata.js';

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

class OpenData extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userProfileData: []
		}
	}

	componentWillMount() {

	}

	componentDidMount() {
		this.props.getOpenData(this.props);
	}

	getTmp() {
		var list = [];
		this.props.opendata.map((v, k) => {
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

		console.log('server render');

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
	console.log(state, 'open data###');
	return {
		opendata: state.OpenList.opendata
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenData);