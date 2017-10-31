	import cookie from 'react-cookies';



	// require('isomorphic-fetch');

	import 'isomorphic-fetch';

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


	export const LoginToken = (user, pass, props) => {

		// console.log(this, 'actions this');

		console.log(user, '用户名');
		console.log(pass, '密码');

		return function(dispatch) {

			// var user = this.refs.user.value;
			// var pass = this.refs.pass.value;

			return fetch("http://127.0.0.1:3001/token", {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: toQueryString({
					username: user,
					password: pass
				})
			}).then(function(res) {

				// res.status = 200;
				res.json().then(res => {

					if (res.status) {
						cookie.save('token', res.token, {
							path: '/'
						});


						dispatch({
							type: "login",
							payload: true
						});
						//登录成功跳转到默认页面
						// console.log(this.props.router.push('/data/userprofile'));

						// this.props.router.push('/');
						props.router.push('/');
					} else {
						//todo 失败弹出层
						alert('用户名或密码错误');
					}
				});
			}.bind(this));
		};
	};