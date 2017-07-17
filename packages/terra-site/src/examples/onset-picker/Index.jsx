/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import OnsetPicker from 'terra-onset-picker/src/OnsetPicker';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import OnsetPickerSrc from '!raw-loader!terra-onset-picker/src/OnsetPicker';
import ReadMe from 'terra-onset-picker/docs/README.md';
import { version } from 'terra-onset-picker/package.json';
// Component Source

const OnsetPickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OnsetPickerSrc} />
    <h2>TODO</h2>
    <ul>
      <li>I18n</li>
      <li>Testing</li>
      <li>Better ouput (needs to include all information)</li>
    </ul>
    <br />
    <h2 id="default">Default with initialization</h2>
    <OnsetPicker birthdate={moment().subtract(6, 'weeks').format()} />
  </div>
);

export default OnsetPickerExamples;
