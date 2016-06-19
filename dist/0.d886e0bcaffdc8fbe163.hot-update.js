webpackHotUpdate(0,{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(175);

	var _App = __webpack_require__(241);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(366);

	var _Home2 = _interopRequireDefault(_Home);

	var _Contact = __webpack_require__(367);

	var _Contact2 = _interopRequireDefault(_Contact);

	var _About = __webpack_require__(370);

	var _About2 = _interopRequireDefault(_About);

	var _SideNav = __webpack_require__(371);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _LandingPage = __webpack_require__(372);

	var _LandingPage2 = _interopRequireDefault(_LandingPage);

	var _pagesWebdesign = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./pagesWebdesign\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _pagesWebdesign2 = _interopRequireDefault(_pagesWebdesign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'contact', component: _Contact2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'sidenav', component: _SideNav2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'landingpage', component: _LandingPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'webdesign', component: _pagesWebdesign2.default })
	);

	exports.default = routes;

/***/ }

})