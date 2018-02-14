exports.ids = [1];
exports.modules = {

/***/ 422:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_opendata_opendata_js__ = __webpack_require__(191);
var _jsxFileName = '/Users/qihong/netease/dev/ssr6/src/shared/openData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















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

var OpenData = function (_React$Component) {
	_inherits(OpenData, _React$Component);

	function OpenData(props) {
		_classCallCheck(this, OpenData);

		var _this = _possibleConstructorReturn(this, (OpenData.__proto__ || Object.getPrototypeOf(OpenData)).call(this, props));

		_this.state = {
			userProfileData: []
		};
		return _this;
	}

	_createClass(OpenData, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.getOpenData(this.props);
		}
	}, {
		key: 'getTmp',
		value: function getTmp() {
			var _this2 = this;

			var list = [];
			this.props.opendata.map(function (v, k) {
				list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tr',
					{ key: k, __source: {
							fileName: _jsxFileName,
							lineNumber: 66
						},
						__self: _this2
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 67
							},
							__self: _this2
						},
						v.date
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 68
							},
							__self: _this2
						},
						v.newUsers
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 69
							},
							__self: _this2
						},
						v.activeUser
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							},
							__self: _this2
						},
						v.id
					)
				));
			});
			return list;
		}
	}, {
		key: 'render',
		value: function render() {

			console.log('server render');

			// console.log(this.state.userProfileData, 'this.state.userProfileData11');

			var dataTmp = this.getTmp();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'App', __source: {
						fileName: _jsxFileName,
						lineNumber: 86
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'App-header', __source: {
							fileName: _jsxFileName,
							lineNumber: 87
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__logo_svg___default.a, className: 'App-logo', alt: 'logo', __source: {
							fileName: _jsxFileName,
							lineNumber: 88
						},
						__self: this
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'h2',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 89
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
							lineNumber: 91
						},
						__self: this
					},
					'\u662F\u4E0D\u662F\u5F88\u9177\uFF1F \u7528\u6237\u6982\u51B5'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: 'left', __source: {
							fileName: _jsxFileName,
							lineNumber: 92
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/', __source: {
								fileName: _jsxFileName,
								lineNumber: 93
							},
							__self: this
						},
						'\u7528\u6237\u6982\u51B5'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/kpireport', __source: {
								fileName: _jsxFileName,
								lineNumber: 94
							},
							__self: this
						},
						'KPI\u62A5\u8868'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/login', __source: {
								fileName: _jsxFileName,
								lineNumber: 95
							},
							__self: this
						},
						'\u767B\u5F55'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_4_react_router__["a" /* Link */],
						{ to: '/getdata', __source: {
								fileName: _jsxFileName,
								lineNumber: 96
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
							lineNumber: 98
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'table',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 99
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'thead',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 100
								},
								__self: this
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'tr',
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 101
									},
									__self: this
								},
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 102
										},
										__self: this
									},
									'\u65E5\u671F'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 103
										},
										__self: this
									},
									'\u65B0\u589E\u7528\u6237'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 104
										},
										__self: this
									},
									'\u6D3B\u8DC3\u7528\u6237'
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'td',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 105
										},
										__self: this
									},
									'\u64CD\u4F5C'
								)
							)
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'tbody',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 109
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

	return OpenData;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	console.log(state, 'open data###');
	return {
		opendata: state.OpenList.opendata
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

	//全量
	return Object(__WEBPACK_IMPORTED_MODULE_7_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_8__actions_opendata_opendata_js__, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(OpenData));

/***/ })

};;
//# sourceMappingURL=getdata.js.map