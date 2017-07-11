import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import NumberField from 'terra-form/lib/NumberField'
import DatePicker from 'terra-date-picker/lib/DatePicker';
import SelectField from '../../terra-form/src/SelectField';
import './FuzzyDatePicker.scss';


const propTypes = {
  /**
   * The minimum date that can be selected. ISO format.
   */
  minDate: PropTypes.string,

  /**
   * The maximum date that can be selected. ISO format.
   */
  maxDate: PropTypes.string,

  /**
   * The date to calculate a fuzzy date from. ISO format.
   */
  basisDate: PropTypes.string,

  /**
   * The granularity of the fuzzy date. ABOUT, BEFORE, AFTER, and UNKOWN are accepted.
   */
  granularity: PropTypes.string,

  /**
   * The precision of the fuzzy date. BASISDATE, YEAR, MONTHYEAR, and DATE are accepted.
   */
  precision: PropTypes.string,

  /**
   * The fuzzy date to modify. ISO format.
   */
  fuzzyDate: PropTypes.string
};

const defaultProps = {
  minDate: undefined,
  maxDate: undefined,
  basisDate: undefined,
  granularity: 'MONTHYEAR',
  precision: 'ABOUT',
  fuzzyDate: moment().format('YYYY-MM-DD'),
};

class FuzzyDatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { granularity: this.props.granularity, precision: this.props.precision, fuzzyDate: this.props.fuzzyDate };

    // This binding is necessary to make `this` work in the callback
    this.togglePrecision = this.togglePrecision.bind(this);
    this.toggleGranularity = this.toggleGranularity.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.availableYears = this.availableYears.bind(this);
  }

  togglePrecision(event) {
    this.setState({ precision: event.target.value });
  }

  toggleGranularity(event) {
    this.setState({ granularity: event.target.value });
  }

  changeYear(event) {
    this.setState({ fuzzyDate: moment(this.state.fuzzyDate).year(event.target.value).format('YYYY-MM-DD') });
  }

  changeMonth(event) {
    this.setState({ fuzzyDate: moment(this.state.fuzzyDate).month(event.target.value).format('YYYY-MM-DD') });
  }

  changeDate(event, date) {
    // Returns a moment event object
    this.setState({ fuzzyDate: moment(date).format('YYYY-MM-DD') });
  }

  // Render the years
  availableYears() {
    const start = moment(this.props.minDate).year();
    const end = moment(this.props.maxDate).year();

    return Array((end - start) + 1).fill(undefined).map(
      (x, idx) => {
        const year = start + idx;
        return { value: year, display: year };
      },
    );
  }

  render() {
    return (
      (<Fieldset legend="Onset Date Picker" className="terra-fuzzy">

        {/* Precision */}
        <SelectField
          choices={[{ value: 'ABOUT', display: 'About' },
                    { value: 'BEFORE', display: 'Before' },
                    { value: 'AFTER', display: 'After' },
                    { value: 'UNKNOWN', display: 'Unknown' }]}
          label="Precision"
          name="precision"
          defaultValue={this.state.precision}
          onChange={this.togglePrecision}
          isInline
        />

        {/* Granularity */}
        { this.state.precision !== 'UNKNOWN' &&
          <SelectField
            choices={[{ value: 'BASISDATE', display: 'Basis Date' },
                      { value: 'YEAR', display: 'Year' },
                      { value: 'MONTHYEAR', display: 'Month/Year' },
                      { value: 'DATE', display: 'Date' }]}
            label="Granularity"
            name="granularity"
            defaultValue={this.state.granularity}
            onChange={this.toggleGranularity}
            isInline
          />
        }

        {/* Basis Date */}
        {this.state.granularity === 'BASISDATE' && this.state.precision !== 'UNKNOWN' &&
          <Fieldset>
            <p>{moment(this.props.basisDate).format('ll')}</p>
            <NumberField
              min={1}
              max={14}
              step={1}
              name="basisCalculation"
              defaultValue={1}
              isInline
            />
            <SelectField
              choices={[{ value: 'DAYS', display: 'Day(s)' },
                        { value: 'WEEKS', display: 'Week(s)' },
                        { value: 'MONTHS', display: 'Month(s)' }]}
              defaultValue="DAYS"
              isInline
            />
          </Fieldset>
        }

        { (this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR') && this.state.precision !== 'UNKNOWN' &&
          <Fieldset>
            {/* Month */}
            { this.state.granularity === 'MONTHYEAR' &&
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
                defaultValue={moment(this.state.fuzzyDate).month()}
                onChange={this.changeMonth}
                label="Month"
                name="month"
                isInline
              />
            }

            {/* Year */}
            <SelectField
              choices={this.availableYears()}
              defaultValue={moment(this.state.fuzzyDate).year()}
              label="Year"
              name="year"
              onChange={this.changeYear}
              isInline
            />
          </Fieldset>
        }

        {/* Date */}
        { this.state.granularity === 'DATE' && this.state.precision !== 'UNKNOWN' &&
          <Field>
            <DatePicker
              onChange={this.changeDate}
              minDate={this.props.minDate}
              maxDate={this.props.maxDate}
              selectedDate={moment(this.state.fuzzyDate).format('YYYY-MM-DD')}
              name="date"
            />
          </Field>
        }

        {/* Output */}
        <p>Fuzzy Date: { this.state.precision === 'UNKNOWN' ?
          this.state.precision : this.state.precision + ' ' + (this.state.granularity === 'DATE' ?
            moment(this.state.fuzzyDate).format('ll') : this.state.granularity === 'YEAR' ?
              moment(this.state.fuzzyDate).format('YYYY') : moment(this.state.fuzzyDate).format('MMM YYYY')) }</p>
      </Fieldset>)
    );
  }
}

FuzzyDatePicker.propTypes = propTypes;
FuzzyDatePicker.defaultProps = defaultProps;

export default FuzzyDatePicker;
