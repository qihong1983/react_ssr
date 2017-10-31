import React from 'react';
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



// require('isomorphic-fetch');

import 'isomorphic-fetch';


/**
 * 后加的
 */

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';


import * as actionCreators from '../actions/login/login';


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


import logo from './logo.svg';

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		cookie.remove('token', {
			path: '/'
		});


	}
	componentDidMount() {
		// console.log(12);

		// this.getLogin();

	}


	getLogin1() {
		var user = this.refs.user.value;
		var pass = this.refs.pass.value;
		this.props.LoginToken(user, pass, this.props);
	}

	getLogin() {
		var user = this.refs.user.value;
		var pass = this.refs.pass.value;

		fetch("http://127.0.0.1:3001/token", {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: toQueryString({
					username: user,
					password: pass
				})
			})
			.then(res => res.json())
			.then(res => {

				if (res.status) {
					cookie.save('token', res.token, {
						path: '/'
					});

					//登录成功跳转到默认页面
					// console.log(this.props.router.push('/data/userprofile'));

					this.props.router.push('/');
				} else {
					//todo 失败弹出层
					alert('用户名或密码错误');
				}
			});
	}

	render() {



		console.log(this.props, 'login props')

		return (


			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>react同构直出demo</h2>
				</div>
				<p className="App-intro">是不是很酷？ 登录页</p>
				<div className="left">
					<Link to="/">用户概况</Link>
					<Link to="/kpireport">KPI报表</Link>
					<Link to ="/login">登录</Link>
					
					<Link to ="/getdata">开放型数据</Link>
				</div>
				<div>
					<div>
					<label>用户名：</label><input type="text" ref="user" />	
					</div>
					
					<div>
					<label>密码：</label><input type="password" ref="pass" />
					</div>

					<div style={{marginTop:"20px"}}>
					<button onClick={this.getLogin1.bind(this)}>登录</button>
					{/*<button onClick={this.props.LoginToken(this)}>登录</button>*/}
					</div>
					
				</div>

			</div>

		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, 'statestate');
	return {
		login: state.Login.login
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);