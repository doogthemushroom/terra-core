'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Eventually define these
   */
  startYear: _react.PropTypes.number,

  endYear: _react.PropTypes.number
};

// Render the years
function renderYears(start, end) {
  return Array(end - start + 1).fill(undefined).map(function (x, idx) {
    return _react2.default.createElement(
      'option',
      { value: start + idx },
      start + idx
    );
  });
}

var FuzzyDatePicker = function (_React$Component) {
  _inherits(FuzzyDatePicker, _React$Component);

  function FuzzyDatePicker() {
    _classCallCheck(this, FuzzyDatePicker);

    return _possibleConstructorReturn(this, (FuzzyDatePicker.__proto__ || Object.getPrototypeOf(FuzzyDatePicker)).apply(this, arguments));
  }

  _createClass(FuzzyDatePicker, [{
    key: 'render',

    // Getting our feet wet
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'terra-fuzzy' },
        _react2.default.createElement(
          'select',
          { name: 'month' },
          _react2.default.createElement(
            'option',
            { value: '01' },
            'January'
          ),
          _react2.default.createElement(
            'option',
            { value: '02' },
            'February'
          ),
          _react2.default.createElement(
            'option',
            { value: '03' },
            'March'
          ),
          _react2.default.createElement(
            'option',
            { value: '04' },
            'April'
          ),
          _react2.default.createElement(
            'option',
            { value: '05' },
            'May'
          ),
          _react2.default.createElement(
            'option',
            { value: '06' },
            'June'
          ),
          _react2.default.createElement(
            'option',
            { value: '07' },
            'July'
          ),
          _react2.default.createElement(
            'option',
            { value: '08' },
            'August'
          ),
          _react2.default.createElement(
            'option',
            { value: '09' },
            'September'
          ),
          _react2.default.createElement(
            'option',
            { value: '10' },
            'October'
          ),
          _react2.default.createElement(
            'option',
            { value: '11' },
            'November'
          ),
          _react2.default.createElement(
            'option',
            { value: '12' },
            'December'
          )
        ),
        _react2.default.createElement(
          'select',
          { name: 'year' },
          renderYears(this.props.startYear, this.props.endYear)
        ),
        'This is a test for me'
      );
    }
  }]);

  return FuzzyDatePicker;
}(_react2.default.Component);

;

FuzzyDatePicker.propTypes = propTypes;

exports.default = FuzzyDatePicker;