'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('terra-base/lib/baseStyles');

var _terraList = require('/Users/dw034710/Documents/Repos/terra-core/packages/terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _SingleSelectList = require('/Users/dw034710/Documents/Repos/terra-core/packages/terra-list/lib/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

var _DatePicker = require('/Users/dw034710/Documents/Repos/terra-core/packages/terra-date-picker/src/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

require('./FuzzyDatePicker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions


var propTypes = {
  // ISO formatted dates

  minDate: _react.PropTypes.string,

  maxDate: _react.PropTypes.string,

  basisDate: _react.PropTypes.string
};

var FuzzyDatePicker = function (_React$Component) {
  _inherits(FuzzyDatePicker, _React$Component);

  function FuzzyDatePicker(props) {
    _classCallCheck(this, FuzzyDatePicker);

    var _this = _possibleConstructorReturn(this, (FuzzyDatePicker.__proto__ || Object.getPrototypeOf(FuzzyDatePicker)).call(this, props));

    _this.state = { granularity: 'MONTHYEAR', precision: 'About', fuzzyDate: (0, _moment2.default)() };

    // This binding is necessary to make `this` work in the callback
    _this.renderYears = _this.renderYears.bind(_this);
    _this.togglePrecision = _this.togglePrecision.bind(_this);
    _this.toggleGranularity = _this.toggleGranularity.bind(_this);
    _this.changeYear = _this.changeYear.bind(_this);
    _this.changeMonth = _this.changeMonth.bind(_this);
    _this.changeDate = _this.changeDate.bind(_this);
    return _this;
  }

  // Render the years


  _createClass(FuzzyDatePicker, [{
    key: 'renderYears',
    value: function renderYears(start, end) {
      return Array(end - start + 1).fill(undefined).map(function (x, idx) {
        var year = start + idx;
        return _react2.default.createElement(
          'option',
          { key: 'year' + year, value: year },
          year
        );
      });
    }
  }, {
    key: 'togglePrecision',
    value: function togglePrecision(value) {
      this.setState({ precision: value });
    }
  }, {
    key: 'toggleGranularity',
    value: function toggleGranularity(value) {
      this.setState({ granularity: value });
    }
  }, {
    key: 'changeYear',
    value: function changeYear(event) {
      this.setState({ fuzzyDate: this.state.fuzzyDate.year(event.target.value) });
    }
  }, {
    key: 'changeMonth',
    value: function changeMonth(event) {
      this.setState({ fuzzyDate: this.state.fuzzyDate.month(event.target.value) });
    }
  }, {
    key: 'changeDate',
    value: function changeDate(event) {
      // Returns a moment event object
      this.setState({ fuzzyDate: event });
    }

    // Getting our feet wet

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'terra-fuzzy' },
        _react2.default.createElement(
          'ul',
          { className: 'list-selectable list-divided' },
          _react2.default.createElement(
            'li',
            { className: this.state.precision === 'About' ? "selected" : null, onClick: function onClick() {
                return _this2.togglePrecision('About');
              } },
            'About'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.precision === 'Before' ? "selected" : null, onClick: function onClick() {
                return _this2.togglePrecision('Before');
              } },
            'Before'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.precision === 'After' ? "selected" : null, onClick: function onClick() {
                return _this2.togglePrecision('After');
              } },
            'After'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.precision === 'Unknown' ? "selected" : null, onClick: function onClick() {
                return _this2.togglePrecision('Unknown');
              } },
            'Unknown'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          { className: 'list-selectable list-divided' },
          _react2.default.createElement(
            'li',
            { className: this.state.granularity === 'BASISDATE' ? "selected" : null, onClick: function onClick() {
                return _this2.toggleGranularity('BASISDATE');
              } },
            'Basis date'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.granularity === 'YEAR' ? "selected" : null, onClick: function onClick() {
                return _this2.toggleGranularity('YEAR');
              } },
            'Year'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.granularity === 'MONTHYEAR' ? "selected" : null, onClick: function onClick() {
                return _this2.toggleGranularity('MONTHYEAR');
              } },
            'Month/Year'
          ),
          _react2.default.createElement(
            'li',
            { className: this.state.granularity === 'DATE' ? "selected" : null, onClick: function onClick() {
                return _this2.toggleGranularity('DATE');
              } },
            'Date'
          )
        ),
        _react2.default.createElement('br', null),
        this.state.granularity === 'BASISDATE' ? _react2.default.createElement(
          'p',
          null,
          (0, _moment2.default)(this.props.basisDate).format('ll')
        ) : null,
        this.state.granularity === 'MONTHYEAR' ? _react2.default.createElement(
          'select',
          { onChange: this.changeMonth, value: this.state.fuzzyDate.month(), name: 'month' },
          _react2.default.createElement(
            'option',
            { value: '0' },
            'January'
          ),
          _react2.default.createElement(
            'option',
            { value: '1' },
            'February'
          ),
          _react2.default.createElement(
            'option',
            { value: '2' },
            'March'
          ),
          _react2.default.createElement(
            'option',
            { value: '3' },
            'April'
          ),
          _react2.default.createElement(
            'option',
            { value: '4' },
            'May'
          ),
          _react2.default.createElement(
            'option',
            { value: '5' },
            'June'
          ),
          _react2.default.createElement(
            'option',
            { value: '6' },
            'July'
          ),
          _react2.default.createElement(
            'option',
            { value: '7' },
            'August'
          ),
          _react2.default.createElement(
            'option',
            { value: '8' },
            'September'
          ),
          _react2.default.createElement(
            'option',
            { value: '9' },
            'October'
          ),
          _react2.default.createElement(
            'option',
            { value: '10' },
            'November'
          ),
          _react2.default.createElement(
            'option',
            { value: '11' },
            'December'
          )
        ) : null,
        this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR' ? _react2.default.createElement(
          'select',
          { onChange: this.changeYear, value: this.state.fuzzyDate.year(), name: 'year' },
          this.renderYears((0, _moment2.default)(this.props.minDate).year(), (0, _moment2.default)(this.props.maxDate).year())
        ) : null,
        this.state.granularity === 'DATE' ? _react2.default.createElement(_DatePicker2.default, { onChange: this.changeDate, minDate: (0, _moment2.default)(this.props.minDate), maxDate: (0, _moment2.default)(this.props.maxDate), selectedDate: this.state.fuzzyDate }) : null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Fuzzy Date: ',
          this.state.precision === 'Unknown' ? this.state.precision : this.state.precision + " " + (this.state.granularity === 'DATE' ? this.state.fuzzyDate.format('ll') : this.state.granularity === 'YEAR' ? this.state.fuzzyDate.format('YYYY') : this.state.fuzzyDate.format('MMM YYYY'))
        )
      );
    }
  }]);

  return FuzzyDatePicker;
}(_react2.default.Component);

FuzzyDatePicker.propTypes = propTypes;

exports.default = FuzzyDatePicker;