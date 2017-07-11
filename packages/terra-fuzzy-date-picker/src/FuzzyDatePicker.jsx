import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import Fieldset from 'terra-form/lib/Fieldset';
import DatePicker from 'terra-date-picker/lib/DatePicker';
import Select from 'terra-form/lib/Select';
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
    this.state = { granularity: 'MONTHYEAR', precision: 'ABOUT', fuzzyDate: moment() };

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
      (<Fieldset legend="Onset Date Picker" className="terra-fuzzy">

        <Select choices={[{ value: 'm', display: 'moo' }]} />

        <SelectField
          choices={[{ value: 'ABOUT', display: 'About' },
                  { value: 'BEFORE', display: 'Before' },
                  { value: 'AFTER', display: 'After' },
                  { value: 'UNKOWN', display: 'Unknown' }]}
          label="Precision"
          name="precision"
          defaultValue="About"
          onChange={this.togglePrecision}
        />

        <SelectField
          choices={[{ value: 'BASISDATE', display: 'Basis Date' },
                    { value: 'YEAR', display: 'Year' },
                    { value: 'MONTHYEAR', display: 'Month/Year' },
                    { value: 'DATE', display: 'Date' }]}
          label="Granularity"
          name="granularity"
          defaultValue="Year"
          onChange={this.toggleGranularity}
        />

        { this.state.granularity === 'BASISDATE' ?
          <p>{moment(this.props.basisDate).format('ll')}</p> : null }

        { this.state.granularity === 'MONTHYEAR' ?
          <SelectField
            choices={[{ value: 0, display: 'January' },
                      { value: 1, display: 'February' },
                      { value: 2, display: 'March' },
                      { value: 3, display: 'April' },
                      { value: 4, display: 'May' },
                      { value: 5, display: 'June' },
                      { value: 6, display: 'July' },
                      { value: 7, display: 'August' },
                      { value: 8, display: 'September' },
                      { value: 9, display: 'October' },
                      { value: 10, display: 'November' },
                      { value: 11, display: 'December' }]}
            onChange={this.changeMonth}
            name="month"
          /> : null }
        { this.state.granularity === 'Year' || this.state.granularity === 'MONTHYEAR' ?
          <select onChange={this.changeYear} value={this.state.fuzzyDate.year()} name="YEAR">
            { this.renderYears(moment(this.props.minDate).year(), moment(this.props.maxDate).year())}
          </select> : null }

        { this.state.granularity === 'Date' ? <DatePicker onChange={this.changeDate} minDate={moment(this.props.minDate)} maxDate={moment(this.props.maxDate)} selectedDate={this.state.fuzzyDate} /> : null }

        <br />
        <br />
        <p>Fuzzy Date: { this.state.precision === 'UNKOWN' ?
          this.state.precision : this.state.precision + ' ' + (this.state.granularity === 'DATE' ?
            this.state.fuzzyDate.format('ll') : this.state.granularity === 'YEAR' ?
              this.state.fuzzyDate.format('YYYY') : this.state.fuzzyDate.format('MMM YYYY')) }</p>
      </Fieldset>)
    );
  }
}

FuzzyDatePicker.propTypes = propTypes;

export default FuzzyDatePicker;
