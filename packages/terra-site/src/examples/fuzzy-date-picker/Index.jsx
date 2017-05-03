/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import FuzzyDatePicker from 'terra-fuzzy-date-picker';
import ReadMe from 'terra-fuzzy-date-picker/docs/README.md';
import { version } from 'terra-fuzzy-date-picker/package.json';
// Component Source

const FuzzyDatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="default">Default</h2>
    <FuzzyDatePicker startYear={1999} endYear={2017} granularity={'DATE'} basisDate={moment().subtract(8, 'years').format('ll')}/>
  </div>
);

export default FuzzyDatePickerExamples;
