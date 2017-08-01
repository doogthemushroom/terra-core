import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import './Select.scss';

const propTypes = {

  /**
   * WARNING: This prop is deprecated, please use the options prop.
   * List of choices to be selected.
   * If choices and options array are supplied, options array will be used over choices.
   */
  choices: PropTypes.array,

  /**
   * List of object key and value pairs for choices to be selected.
   * If choices and options array are supplied, options array will be used over choices.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })),

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
  defaultValue: PropTypes.string,
};

const defaultProps = {
  choices: undefined,
  options: undefined,
  onChange: undefined,
  name: null,
  required: false,
  defaultValue: null,
};

const Select = ({
  choices,
  options,
  onChange,
  name,
  required,
  defaultValue,
  ...customProps
}) => {
  const additionalSelectFieldProps = Object.assign({}, customProps);

  if (required) {
    additionalSelectFieldProps['aria-required'] = 'true';
  }

  if (choices && options === undefined) {
    // Build out key & value array for deprecated choices prop
    options = choices.map(choice => ({ value: choice, display: choice }));
    /* eslint-disable no-console */
    console.warn('The choices prop for the Terra Form Select component is deprecated and will be removed in a later release. Please use the options prop instead https://terra-ui.herokuapp.com/components/core/form#select.');
    /* eslint-disable no-console */
  }

  return (
    <select
      {...additionalSelectFieldProps}
      name={name}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue}
      className={classNames('terra-Form-select', additionalSelectFieldProps.className)}
    >
      {options.map(option => <option key={option.value} value={option.value}>{option.display}</option>)}
    </select>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
