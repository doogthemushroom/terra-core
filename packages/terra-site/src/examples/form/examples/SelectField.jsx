// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SelectField from 'terra-form/lib/SelectField';
/* eslint-enable import/no-extraneous-dependencies */

const SelectFieldExamples = () => (
  <form>
    <SelectField
      choices={['Puppies', 'Kittens', 'Snappers', 'Bumblers', 'Joeys']}
      help="TO DETERMINE IF YOU ARE NOT A ROBOT, PLEASE PICK YOUR FAVORITE SMALL ANIMAL"
      label="Animals"
      name="foo"
      defaultValue="Snappers"
      required
    />
  </form>
);

export default SelectFieldExamples;
