'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This component disables background scrolling.
var ModalAccessibility = function (_React$Component) {
  _inherits(ModalAccessibility, _React$Component);

  function ModalAccessibility() {
    _classCallCheck(this, ModalAccessibility);

    return _possibleConstructorReturn(this, (ModalAccessibility.__proto__ || Object.getPrototypeOf(ModalAccessibility)).apply(this, arguments));
  }

  _createClass(ModalAccessibility, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Disable scrolling on the page when Overlay is displayed
      document.documentElement.style.overflow = 'hidden';
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['children']);

      return null;
    }
  }]);

  return ModalAccessibility;
}(_react2.default.Component);

exports.default = ModalAccessibility;