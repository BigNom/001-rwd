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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'contact', component: _Contact2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'sidenav', component: _SideNav2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'landingpage', component: _LandingPage2.default })
	);

	exports.default = routes;

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(175);

	var _pageheader = __webpack_require__(368);

	var _pageheader2 = _interopRequireDefault(_pageheader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LandingPage = function (_React$Component) {
	  _inherits(LandingPage, _React$Component);

	  function LandingPage() {
	    _classCallCheck(this, LandingPage);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LandingPage).apply(this, arguments));
	  }

	  _createClass(LandingPage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container demo-1' },
	        _react2.default.createElement(
	          'div',
	          { className: 'content' },
	          _react2.default.createElement(
	            'div',
	            { id: 'large-header', className: 'large-header' },
	            _react2.default.createElement('canvas', { id: 'demo-canvas' }),
	            _react2.default.createElement(
	              'h1',
	              { className: 'main-title' },
	              'Reactive ',
	              _react2.default.createElement(
	                'span',
	                { className: 'thin' },
	                'Web Designs'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LandingPage;
	}(_react2.default.Component);

	exports.default = LandingPage;

/***/ }

})