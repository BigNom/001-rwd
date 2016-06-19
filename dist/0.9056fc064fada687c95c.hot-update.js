webpackHotUpdate(0,{

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(175);

	var _Social = __webpack_require__(244);

	var _Social2 = _interopRequireDefault(_Social);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = _react2.default.createClass({
	  displayName: 'Footer',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'component-wrapper' },
	      _react2.default.createElement(
	        'div',
	        { className: 'footer-wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'medium-3 large-3 columns' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'menu' },
	              _react2.default.createElement(
	                'li',
	                { className: 'menu-text' },
	                'Boiler Plate'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/webdesigns', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
	                  'Responsive Web Designs'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_Social2.default, null)
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'copyright text-center' },
	        _react2.default.createElement(
	          'small',
	          null,
	          'Copyright © 2016 ReactiveWebDesigns'
	        )
	      )
	    );
	  }
	});

	exports.default = Footer;

/***/ }

})