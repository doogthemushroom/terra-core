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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions


var propTypes = {
  /**
   * Make some of these state based?
   */
  startYear: _react.PropTypes.number,

  endYear: _react.PropTypes.number,

  basisDate: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

// Render the years
function renderYears(start, end) {
  return Array(end - start + 1).fill(undefined).map(function (x, idx) {
    return _react2.default.createElement(
      'option',
      { key: 'year' + start + idx, value: start + idx },
      start + idx
    );
  });
}

var FuzzyDatePicker = function (_React$Component) {
  _inherits(FuzzyDatePicker, _React$Component);

  function FuzzyDatePicker(props) {
    _classCallCheck(this, FuzzyDatePicker);

    var _this = _possibleConstructorReturn(this, (FuzzyDatePicker.__proto__ || Object.getPrototypeOf(FuzzyDatePicker)).call(this, props));

    _this.state = { granularity: 'YEAR', precision: 'About', fuzzyYear: _this.props.startYear, fuzzyMonth: 'January', fuzzyDate: (0, _moment2.default)().format('ll') };

    // This binding is necessary to make `this` work in the callback
    _this.toggleAbout = _this.toggleAbout.bind(_this);
    _this.toggleBefore = _this.toggleBefore.bind(_this);
    _this.toggleAfter = _this.toggleAfter.bind(_this);
    _this.toggleUnknown = _this.toggleUnknown.bind(_this);
    _this.toggleAge = _this.toggleAge.bind(_this);
    _this.toggleYear = _this.toggleYear.bind(_this);
    _this.toggleMonthYear = _this.toggleMonthYear.bind(_this);
    _this.toggleDate = _this.toggleDate.bind(_this);
    _this.changeYear = _this.changeYear.bind(_this);
    _this.changeMonth = _this.changeMonth.bind(_this);
    _this.changeDate = _this.changeDate.bind(_this);
    return _this;
  }

  _createClass(FuzzyDatePicker, [{
    key: 'toggleAbout',
    value: function toggleAbout() {
      this.setState({ precision: 'About' });
    }
  }, {
    key: 'toggleBefore',
    value: function toggleBefore() {
      this.setState({ precision: 'Before' });
    }
  }, {
    key: 'toggleAfter',
    value: function toggleAfter() {
      this.setState({ precision: 'After' });
    }
  }, {
    key: 'toggleUnknown',
    value: function toggleUnknown() {
      this.setState({ precision: 'Unknown' });
    }
  }, {
    key: 'toggleAge',
    value: function toggleAge() {
      this.setState({ granularity: 'AGE' });
    }
  }, {
    key: 'toggleYear',
    value: function toggleYear() {
      this.setState({ granularity: 'YEAR' });
    }
  }, {
    key: 'toggleMonthYear',
    value: function toggleMonthYear() {
      this.setState({ granularity: 'MONTHYEAR' });
    }
  }, {
    key: 'toggleDate',
    value: function toggleDate() {
      this.setState({ granularity: 'DATE' });
    }
  }, {
    key: 'changeYear',
    value: function changeYear(event) {
      this.setState({ fuzzyYear: event.target.value });
    }
  }, {
    key: 'changeMonth',
    value: function changeMonth(event) {
      this.setState({ fuzzyMonth: event.target.value });
    }
  }, {
    key: 'changeDate',
    value: function changeDate(event) {
      // Returns a moment event object
      this.setState({ fuzzyDate: event.format('ll') });
    }

    // Getting our feet wet

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'terra-fuzzy' },
        _react2.default.createElement(
          'ul',
          { className: 'list-selectable list-divided' },
          _react2.default.createElement(
            'li',
            { onClick: this.toggleAbout },
            'About'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleBefore },
            'Before'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleAfter },
            'After'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleUnknown },
            'Unknown'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          { className: 'list-selectable list-divided' },
          _react2.default.createElement(
            'li',
            { onClick: this.toggleAge },
            'Basis date'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleYear },
            'Year'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleMonthYear },
            'Month/Year'
          ),
          _react2.default.createElement(
            'li',
            { onClick: this.toggleDate },
            'Date'
          )
        ),
        _react2.default.createElement('br', null),
        this.state.granularity === 'AGE' ? _react2.default.createElement(
          'p',
          null,
          this.props.basisDate.toString()
        ) : null,
        this.state.granularity === 'MONTHYEAR' ? _react2.default.createElement(
          'select',
          { onChange: this.changeMonth, name: 'month' },
          _react2.default.createElement(
            'option',
            { value: 'January' },
            'January'
          ),
          _react2.default.createElement(
            'option',
            { value: 'February' },
            'February'
          ),
          _react2.default.createElement(
            'option',
            { value: 'March' },
            'March'
          ),
          _react2.default.createElement(
            'option',
            { value: 'April' },
            'April'
          ),
          _react2.default.createElement(
            'option',
            { value: 'May' },
            'May'
          ),
          _react2.default.createElement(
            'option',
            { value: 'June' },
            'June'
          ),
          _react2.default.createElement(
            'option',
            { value: 'July' },
            'July'
          ),
          _react2.default.createElement(
            'option',
            { value: 'August' },
            'August'
          ),
          _react2.default.createElement(
            'option',
            { value: 'September' },
            'September'
          ),
          _react2.default.createElement(
            'option',
            { value: 'October' },
            'October'
          ),
          _react2.default.createElement(
            'option',
            { value: 'November' },
            'November'
          ),
          _react2.default.createElement(
            'option',
            { value: 'December' },
            'December'
          )
        ) : null,
        this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR' ? _react2.default.createElement(
          'select',
          { onChange: this.changeYear, name: 'year' },
          renderYears(this.props.startYear, this.props.endYear)
        ) : null,
        this.state.granularity === 'DATE' ? _react2.default.createElement(_DatePicker2.default, { onChange: this.changeDate }) : null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Fuzzy Date: ',
          this.state.precision + " " + (this.state.granularity === 'DATE' ? this.state.fuzzyDate : this.state.granularity === 'YEAR' ? this.state.fuzzyYear : this.state.fuzzyMonth + " " + this.state.fuzzyYear)
        )
      );
    }
  }]);

  return FuzzyDatePicker;
}(_react2.default.Component);

FuzzyDatePicker.propTypes = propTypes;

exports.default = FuzzyDatePicker;