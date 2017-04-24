/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import FuzzyDatePicker from 'terra-date-picker';
import ReadMe from 'terra-fuzzy-date-picker/docs/README.md';
import { version } from 'terra-fuzzy-date-picker/package.json';


const FuzzyDatePickerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    // <PropsTable id="props" src={ContentContainerSrc} />
    // <h2 id="standard">Standard Container</h2>
    // <ContentContainerStandard />
    // <h2 id="outline-variant">Fill Container</h2>
    // <ContentContainerFill />
  </div>
);

export default FuzzyDatePickerExamples;
