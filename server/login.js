exports.ids = [0];
exports.modules = {

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookies__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_login_login__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__logo_svg__);
var _jsxFileName = '/Users/qihong/netease/dev/ssr6/src/shared/Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// require('isomorphic-fetch');



/**
 * 后加的
 */







function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}



var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	}

	_createClass(Login, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			__WEBPACK_IMPORTED_MODULE_2_react_cookies___default.a.remove('token', {
				path: '/'
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log(12);

			// this.getLogin();

		}
	}, {
		key: 'getLogin1',
		value: function getLogin1() {
			var user = this.refs.user.value;
			var pass = this.refs.pass.value;
			this.props.LoginToken(user, pass, this.props);
		}
	}, {
		key: 'getLogin',
		value: function getLogin() {
			var _this2 = this;

			var user = this.refs.user.value;
			var pass = this.refs.pass.value;

			fetch("http://127.0.0.1:3001/token", {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: toQueryString({
					username: user,
					password: pass
				})
			}).then(function (res) {
				return res.json();
			}).then(function (res) {

				if (res.status) {
					__WEBPACK_IMPORTED_MODULE_2_react_cookies___default.a.save('token', res.token, {
						path: '/'
					});

					//登录成功跳转到默认页面
					// console.log(this.props.router.push('/data/userprofile'));

					_this2.props.router.push('/');
				} else {
					//todo 失败弹出层
					alert('用户名或密码错误');
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			console.log(this.props, 'login props');

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'App', __source: {
						fileName: _jsxFileName,
						lineNumber: 124
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'App-header', __source: {
							fileName: _jsxFileName,
							lineNumber: 125
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_7__logo_svg___default.a, className: 'App-logo', alt: 'logo', __source: {
							fileName: _jsxFileName,
							lineNumber: 126
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 127
							},
							__self: this
						},
						'react\u540C\u6784\u76F4\u51FAdemo'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: 'App-intro', __source: {
							fileName: _jsxFileName,
							lineNumber: 129
						},
						__self: this
					},
					'\u662F\u4E0D\u662F\u5F88\u9177\uFF1F \u767B\u5F55\u9875'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'left', __source: {
							fileName: _jsxFileName,
							lineNumber: 130
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_react_router__["a" /* Link */],
						{ to: '/', __source: {
								fileName: _jsxFileName,
								lineNumber: 131
							},
							__self: this
						},
						'\u7528\u6237\u6982\u51B5'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_react_router__["a" /* Link */],
						{ to: '/kpireport', __source: {
								fileName: _jsxFileName,
								lineNumber: 132
							},
							__self: this
						},
						'KPI\u62A5\u8868'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_react_router__["a" /* Link */],
						{ to: '/login', __source: {
								fileName: _jsxFileName,
								lineNumber: 133
							},
							__self: this
						},
						'\u767B\u5F55'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_react_router__["a" /* Link */],
						{ to: '/getdata', __source: {
								fileName: _jsxFileName,
								lineNumber: 135
							},
							__self: this
						},
						'\u5F00\u653E\u578B\u6570\u636E'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 137
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 138
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 139
								},
								__self: this
							},
							'\u7528\u6237\u540D\uFF1A'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', ref: 'user', __source: {
								fileName: _jsxFileName,
								lineNumber: 139
							},
							__self: this
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 142
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'label',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 143
								},
								__self: this
							},
							'\u5BC6\u7801\uFF1A'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', ref: 'pass', __source: {
								fileName: _jsxFileName,
								lineNumber: 143
							},
							__self: this
						})
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ style: { marginTop: "20px" }, __source: {
								fileName: _jsxFileName,
								lineNumber: 146
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'button',
							{ onClick: this.getLogin1.bind(this), __source: {
									fileName: _jsxFileName,
									lineNumber: 147
								},
								__self: this
							},
							'\u767B\u5F55'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
	console.log(state, 'statestate');
	return {
		login: state.Login.login
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return Object(__WEBPACK_IMPORTED_MODULE_5_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_6__actions_login_login__, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginToken", function() { return LoginToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_cookies__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


// require('isomorphic-fetch');



function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}

var LoginToken = function LoginToken(user, pass, props) {

	// console.log(this, 'actions this');

	console.log(user, '用户名');
	console.log(pass, '密码');

	return function (dispatch) {

		// var user = this.refs.user.value;
		// var pass = this.refs.pass.value;

		return fetch("http://127.0.0.1:3001/token", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: toQueryString({
				username: user,
				password: pass
			})
		}).then(function (res) {

			// res.status = 200;
			res.json().then(function (res) {

				if (res.status) {
					__WEBPACK_IMPORTED_MODULE_0_react_cookies___default.a.save('token', res.token, {
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

/***/ })

};;
//# sourceMappingURL=login.js.map