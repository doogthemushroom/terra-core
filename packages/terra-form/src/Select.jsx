import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import 'terra-base/lib/baseStyles';
import styles from './Select.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of object key/value pairs for choices to be selected.
   */
  choices: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    display: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired),

  /**
   * Function to trigger when the user changes the select value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * Name of the select field.
   */
  name: PropTypes.string,

  /**
   * Whether the select is required or not.
   */
  required: PropTypes.bool,

  /**
   * The value to start the select on.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  onChange: undefined,
  name: null,
  required: false,
  defaultValue: null,
};

const Select = ({
  choices,
  onChange,
  name,
  required,
  defaultValue,
  ...customProps
}) => {
  const additionalSelectProps = Object.assign({}, customProps);
  const selectClasses = cx(['select', additionalSelectProps.className]);

  if (required) {
    additionalSelectProps['aria-required'] = 'true';
  }

  return (
    <select
      {...additionalSelectProps}
      name={name}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      className={selectClasses}
    >
      {choices.map(choice => <option key={choice.value} value={choice.value}>{choice.display}</option>)}
    </select>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
