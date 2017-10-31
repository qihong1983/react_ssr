exports.ids = [2];
exports.modules = {

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_css__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookies__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_kpireport_kpireport__ = __webpack_require__(190);
var _jsxFileName = '/Users/qihong/netease/dev/ssr6/src/shared/kpireport.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// require('es6-promise');
// require('isomorphic-fetch');

// import 'whatwg-fetch';













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

var KpiReport = function (_React$Component) {
	_inherits(KpiReport, _React$Component);

	function KpiReport(props) {
		_classCallCheck(this, KpiReport);

		return _possibleConstructorReturn(this, (KpiReport.__proto__ || Object.getPrototypeOf(KpiReport)).call(this, props));

		// this.state = {
		// 	kpiReportData: []
		// }
	}

	_createClass(KpiReport, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			// this.getUserProfile();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			console.log(this.props, '看一看props');

			var token = __WEBPACK_IMPORTED_MODULE_5_react_cookies___default.a.load('token');

			if (global.token) {
				token = global.token;
			} else {
				token = __WEBPACK_IMPORTED_MODULE_5_react_cookies___default.a.load('token');
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
	}, {
		key: 'getTmp',
		value: function getTmp() {
			var _this2 = this;

			var list = [];

			this.props.kpiListData.map(function (v, k) {
				list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tr',
					{ key: k, __source: {
							fileName: _jsxFileName,
							lineNumber: 96
						},
						__self: _this2
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 97
							},
							__self: _this2
						},
						v.appCode
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 99
							},
							__self: _this2
						},
						v.channelType
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 102
							},
							__self: _this2
						},
						v.online
					)
				));
			});

			return list;
		}
	}, {
		key: 'render',
		value: function render() {

			console.log(this.props, 'props kpi');
			var dataTmp = this.getTmp();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'App', __source: {
						fileName: _jsxFileName,
						lineNumber: 117
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'App-header', __source: {
							fileName: _jsxFileName,
							lineNumber: 118
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__logo_svg___default.a, className: 'App-logo', alt: 'logo', __source: {
							fileName: _jsxFileName,
							lineNumber: 119
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 120
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
							lineNumber: 122
						},
						__self: this
					},
					'\u662F\u4E0D\u662F\u5F88\u9177\uFF1F KPI\u62A5\u8868'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'left', __source: {
							fileName: _jsxFileName,
							lineNumber: 123
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/', __source: {
								fileName: _jsxFileName,
								lineNumber: 124
							},
							__self: this
						},
						'\u7528\u6237\u6982\u51B5'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/kpireport', __source: {
								fileName: _jsxFileName,
								lineNumber: 125
							},
							__self: this
						},
						'KPI\u62A5\u8868'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/login', __source: {
								fileName: _jsxFileName,
								lineNumber: 126
							},
							__self: this
						},
						'\u767B\u5F55'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/getdata', __source: {
								fileName: _jsxFileName,
								lineNumber: 128
							},
							__self: this
						},
						'\u5F00\u653E\u578B\u6570\u636E'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'right', __source: {
							fileName: _jsxFileName,
							lineNumber: 131
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'table',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 132
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'thead',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 133
								},
								__self: this
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'tr',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 135
									},
									__self: this
								},
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 136
										},
										__self: this
									},
									'\u64CD\u4F5C\u7CFB\u7EDF'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 137
										},
										__self: this
									},
									'\u6E20\u9053\u7C7B\u578B'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 138
										},
										__self: this
									},
									'\u7EBF\u4E0A\u7EBF\u4E0B'
								)
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'tbody',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 142
								},
								__self: this
							},
							dataTmp
						)
					)
				)
			);
		}
	}]);

	return KpiReport;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {

	console.log(state, 'kpi date###');
	return {
		kpiListData: state.KpiList.KpiList,
		login: state.Login.login
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

	//全量
	return Object(__WEBPACK_IMPORTED_MODULE_7_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_8__actions_kpireport_kpireport__, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(KpiReport));

/***/ })

};;
//# sourceMappingURL=kpireport.js.map