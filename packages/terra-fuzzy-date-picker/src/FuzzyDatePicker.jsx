import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import List from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-list';
import SingleSelectList from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-list/lib/SingleSelectList';
import DatePicker from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-date-picker/src/DatePicker';

const propTypes = {
  /**
   * Make some of these state based?
   */
  startYear: PropTypes.number,

  endYear: PropTypes.number,

  basisDate: PropTypes.oneOfType([PropTypes.object]),
};

// Render the years
function renderYears(start, end) {
  return Array(end - start + 1).fill(undefined).map((x, idx) => <option key={'year' + start + idx} value={start + idx}>{start + idx}</option>);
}

class FuzzyDatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {granularity: 'YEAR', precision: 'About', fuzzyYear: this.props.startYear, fuzzyMonth: 'January', fuzzyDate: moment().format('ll')};

    // This binding is necessary to make `this` work in the callback
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleBefore = this.toggleBefore.bind(this);
    this.toggleAfter = this.toggleAfter.bind(this);
    this.toggleUnknown = this.toggleUnknown.bind(this);
    this.toggleAge = this.toggleAge.bind(this);
    this.toggleYear = this.toggleYear.bind(this);
    this.toggleMonthYear = this.toggleMonthYear.bind(this);
    this.toggleDate = this.toggleDate.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  toggleAbout() {
    this.setState({precision: 'About'});
  }

  toggleBefore() {
    this.setState({precision: 'Before'});
  }

  toggleAfter() {
    this.setState({precision: 'After'});
  }

  toggleUnknown() {
    this.setState({precision: 'Unknown'});
  }

  toggleAge() {
    this.setState({granularity: 'AGE'});
  }

  toggleYear() {
    this.setState({granularity: 'YEAR'});
  }

  toggleMonthYear() {
    this.setState({granularity: 'MONTHYEAR'});
  }

  toggleDate() {
    this.setState({granularity: 'DATE'});
  }

  changeYear(event) {
    this.setState({fuzzyYear: event.target.value});
  }

  changeMonth(event) {
    this.setState({fuzzyMonth: event.target.value});
  }

  changeDate(event) {
    // Returns a moment event object
    this.setState({fuzzyDate: event.format('ll')});
  }

  // Getting our feet wet
  render() {
    return (
      (<div className="terra-fuzzy">

        {
        // <SingleSelectList onChange={this.changePrecision} isDivided hasChevrons={false}>
        //   <SingleSelectList.Item content={<p>About</p>} key="precAbout" />
        //   <SingleSelectList.Item content={<p>Before</p>} key="precBefore" />
        //   <SingleSelectList.Item content={<p>After</p>} key="precAfter" />
        //   <SingleSelectList.Item content={<p>Unknown</p>} key="precUnknown" />
        // </SingleSelectList>
        }

        <ul className="list-selectable list-divided">
          <li onClick={this.toggleAbout}>About</li>
          <li onClick={this.toggleBefore}>Before</li>
          <li onClick={this.toggleAfter}>After</li>
          <li onClick={this.toggleUnknown}>Unknown</li>
        </ul>
        <br/>
        <ul className="list-selectable list-divided">
          <li onClick={this.toggleAge}>Basis date</li>
          <li onClick={this.toggleYear}>Year</li>
          <li onClick={this.toggleMonthYear}>Month/Year</li>
          <li onClick={this.toggleDate}>Date</li>
        </ul>
        <br/>

        { this.state.granularity === 'AGE' ?
          <p>{this.props.basisDate.toString()}</p> : null }

        { this.state.granularity === 'MONTHYEAR' ?
          <select onChange={this.changeMonth} name="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select> : null }
        { this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR' ?
          <select onChange={this.changeYear} name="year">{renderYears(this.props.startYear, this.props.endYear)}</select> : null }

        { this.state.granularity === 'DATE' ? <DatePicker onChange={this.changeDate} /> : null }

        <br/>
        <br/>
        <p>Fuzzy Date: { this.state.precision + " " + (this.state.granularity === 'DATE' ? this.state.fuzzyDate : this.state.granularity === 'YEAR' ? this.state.fuzzyYear : this.state.fuzzyMonth + " " + this.state.fuzzyYear) }</p>
      </div>)
    );
  }
}

FuzzyDatePicker.propTypes = propTypes;

export default FuzzyDatePicker;
