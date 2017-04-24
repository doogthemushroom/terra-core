/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import FuzzyDatePicker from 'terra-fuzzy-date-picker';
import ReadMe from 'terra-fuzzy-date-picker/docs/README.md';
import { version } from 'terra-fuzzy-date-picker/package.json';


const FuzzyDatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
  </div>
);

export default FuzzyDatePickerExamples;
