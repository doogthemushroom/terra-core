import React, { PropTypes } from 'react';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Eventually define these
   */
   startYear: PropTypes.number,

   endYear: PropTypes.number
}

// Render the years
function renderYears(start, end) {
  return Array(end - start + 1).fill(undefined).map((x,idx) => <option value={start+idx}>{start + idx}</option>);
}

class FuzzyDatePicker extends React.Component {
  // Getting our feet wet
  render() {
    return (
      (<div className="terra-fuzzy">
        <select name="month">
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select name="year">
          {renderYears(this.props.startYear, this.props.endYear)}
        </select>
        This is a test for me
      </div>)
    );
  }
};

FuzzyDatePicker.propTypes = propTypes;

export default FuzzyDatePicker;
