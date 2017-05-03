import React, { PropTypes } from 'react';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import List from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-list';
import SingleSelectList from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-list/lib/SingleSelectList';
import DatePicker from '/Users/dw034710/Documents/Repos/terra-core/packages/terra-date-picker/src/DatePicker';
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
    this.state = {granularity: 'MONTHYEAR', precision: 'About', fuzzyDate: moment()};

    // This binding is necessary to make `this` work in the callback
    this.renderYears = this.renderYears.bind(this);
    this.togglePrecision = this.togglePrecision.bind(this);
    this.toggleGranularity = this.toggleGranularity.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }


  // Render the years
  renderYears(start, end) {
    return Array(end - start + 1).fill(undefined).map(
      (x, idx) => {
        var year = start + idx;
        return <option key={'year' + year} value={year}>{year}</option>;
      }
    );
  }

  togglePrecision(value) {
    this.setState({precision: value});
  }

  toggleGranularity(value) {
    this.setState({granularity: value});
  }

  changeYear(event) {
    this.setState({fuzzyDate: this.state.fuzzyDate.year(event.target.value)});
  }

  changeMonth(event) {
    this.setState({fuzzyDate: this.state.fuzzyDate.month(event.target.value)});
  }

  changeDate(event) {
    // Returns a moment event object
    this.setState({fuzzyDate: event});
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
          <li className={ this.state.precision === 'About' ? "selected" : null } onClick={() => this.togglePrecision('About')}>About</li>
          <li className={ this.state.precision === 'Before' ? "selected" : null } onClick={() => this.togglePrecision('Before')}>Before</li>
          <li className={ this.state.precision === 'After' ? "selected" : null } onClick={() => this.togglePrecision('After')}>After</li>
          <li className={ this.state.precision === 'Unknown' ? "selected" : null } onClick={() => this.togglePrecision('Unknown')}>Unknown</li>
        </ul>
        <br/>
        <ul className="list-selectable list-divided">
          <li className={ this.state.granularity === 'BASISDATE' ? "selected" : null } onClick={() => this.toggleGranularity('BASISDATE')}>Basis date</li>
          <li className={ this.state.granularity === 'YEAR' ? "selected" : null } onClick={() => this.toggleGranularity('YEAR')}>Year</li>
          <li className={ this.state.granularity === 'MONTHYEAR' ? "selected" : null } onClick={() => this.toggleGranularity('MONTHYEAR')}>Month/Year</li>
          <li className={ this.state.granularity === 'DATE' ? "selected" : null } onClick={() => this.toggleGranularity('DATE')}>Date</li>
        </ul>
        <br/>

        { this.state.granularity === 'BASISDATE' ?
          <p>{moment(this.props.basisDate).format('ll')}</p> : null }

        { this.state.granularity === 'MONTHYEAR' ?
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
        { this.state.granularity === 'YEAR' || this.state.granularity === 'MONTHYEAR' ?
          <select onChange={this.changeYear} value={this.state.fuzzyDate.year()} name="year">
            { this.renderYears(moment(this.props.minDate).year(), moment(this.props.maxDate).year())}
          </select> : null }

        { this.state.granularity === 'DATE' ? <DatePicker onChange={this.changeDate} minDate={moment(this.props.minDate)} maxDate={moment(this.props.maxDate)} selectedDate={this.state.fuzzyDate}/> : null }

        <br/>
        <br/>
        <p>Fuzzy Date: { this.state.precision === 'Unknown'?
          this.state.precision : this.state.precision + " " + (this.state.granularity === 'DATE' ?
            this.state.fuzzyDate.format('ll') : this.state.granularity === 'YEAR' ?
              this.state.fuzzyDate.format('YYYY') : this.state.fuzzyDate.format('MMM YYYY')) }</p>
      </div>)
    );
  }
}

FuzzyDatePicker.propTypes = propTypes;

export default FuzzyDatePicker;
