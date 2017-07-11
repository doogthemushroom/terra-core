import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import Fieldset from 'terra-form/lib/Fieldset';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import SelectField from 'terra-form/lib/SelectField';
import './FuzzyDatePicker.scss';


const propTypes = {
  // ISO formatted dates

  minDate: PropTypes.string,

  maxDate: PropTypes.string,

  basisDate: PropTypes.string,
};

class FuzzyDatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { granularity: 'MONTHYEAR', precision: 'About', fuzzyDate: moment() };

    // This binding is necessary to make `this` work in the callback
    this.renderYears = this.renderYears.bind(this);
    this.togglePrecision = this.togglePrecision.bind(this);
    this.toggleGranularity = this.toggleGranularity.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  togglePrecision(event) {
    this.setState({ precision: event.target.value });
  }

  toggleGranularity(event) {
    this.setState({ granularity: event.target.value });
  }

  changeYear(event) {
    this.setState({ fuzzyDate: this.state.fuzzyDate.year(event.target.value) });
  }

  changeMonth(event) {
    this.setState({ fuzzyDate: this.state.fuzzyDate.month(event.target.value) });
  }

  changeDate(event) {
    // Returns a moment event object
    this.setState({ fuzzyDate: event });
  }

  // Render the years
  renderYears(start, end) {
    return Array((end - start) + 1).fill(undefined).map(
      (x, idx) => {
        const year = start + idx;
        return <option key={`year ${year}`} value={year}>{year}</option>;
      },
    );
  }

  render() {
    return (
      (<Fieldset legend="Onset Date" className="terra-fuzzy">

        <SelectField
          choices={['About', 'Before', 'After', 'Unknown']}
          label="Precision"
          name="precision"
          defaultValue="About"
          onChange={this.togglePrecision}
        />

        <SelectField
          choices={['Basis Date', 'Year', 'Month/Year', 'Date']}
          label="Granularity"
          name="granularity"
          defaultValue="Year"
          onChange={this.toggleGranularity}
        />

        { this.state.granularity === 'Basis Date' ?
          <p>{moment(this.props.basisDate).format('ll')}</p> : null }

        { this.state.granularity === 'Month/Year' ?
          <select onChange={this.changeMonth} value={this.state.fuzzyDate.month()} name="month">
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select> : null }
        { this.state.granularity === 'Year' || this.state.granularity === 'Month/Year' ?
          <select onChange={this.changeYear} value={this.state.fuzzyDate.year()} name="year">
            { this.renderYears(moment(this.props.minDate).year(), moment(this.props.maxDate).year())}
          </select> : null }

        { this.state.granularity === 'Date' ? <DatePicker onChange={this.changeDate} minDate={moment(this.props.minDate)} maxDate={moment(this.props.maxDate)} selectedDate={this.state.fuzzyDate} /> : null }

        <br />
        <br />
        <p>Fuzzy Date: { this.state.precision === 'Unknown' ?
          this.state.precision : this.state.precision + ' ' + (this.state.granularity === 'Date' ?
            this.state.fuzzyDate.format('ll') : this.state.granularity === 'Year' ?
              this.state.fuzzyDate.format('YYYY') : this.state.fuzzyDate.format('MMM YYYY')) }</p>
      </Fieldset>)
    );
  }
}

FuzzyDatePicker.propTypes = propTypes;

export default FuzzyDatePicker;
