/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import Markdown from 'terra-markdown';
import FuzzyDatePicker from 'terra-fuzzy-date-picker/src/FuzzyDatePicker';
import ReadMe from 'terra-fuzzy-date-picker/docs/README.md';
import { version } from 'terra-fuzzy-date-picker/package.json';
// Component Source

const FuzzyDatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>TODO</h2>
    <ul>
      <li>Basis date calculation</li>
      <li>Cleanup, cleanup</li>
    </ul>
    <br />
    <h2 id="default">Default with initialization</h2>
    <FuzzyDatePicker minDate={moment('2000-01-01').format()} maxDate={moment().format()} basisDate={moment().subtract(8, 'years').format()} />
  </div>
);

export default FuzzyDatePickerExamples;
