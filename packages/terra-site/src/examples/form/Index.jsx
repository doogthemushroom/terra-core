/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

import React from 'react';
import Button from 'terra-button';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/README.md';
import FieldDocs from 'terra-form/docs/Field.md';
import FieldsetDocs from 'terra-form/docs/Fieldset.md';
import InputDocs from 'terra-form/docs/Input.md';
import SelectDocs from 'terra-form/docs/Select.md';
import SelectFieldDocs from 'terra-form/docs/SelectField.md';

import { version } from 'terra-form/package.json';

// Component Source
import FieldSrc from '!raw-loader!terra-form/src/Field';
import FieldsetSrc from '!raw-loader!terra-form/src/Fieldset';
import InputSrc from '!raw-loader!terra-form/src/Input';
import SelectSrc from '!raw-loader!terra-form/src/Select';
import SelectFieldSrc from '!raw-loader!terra-form/src/SelectField';

// Example Files
import ControlledInputDocs from './docs/ControlledInput.md';
import ControlledInput from './examples/ControlledInput';
import FieldExamples from './examples/Field';
import FieldsetExamples from './examples/Fieldset';
import InputExamples from './examples/Input';
import SelectExamples from './examples/Select';
import SelectFieldExamples from './examples/SelectField';

const scrollToComponent = (id) => {
  document.querySelector(id).scrollIntoView();
};

const FormsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Components</h1>
    <hr />
    <div>
      <Button text="Field" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Fieldset" variant="link" onClick={() => { scrollToComponent('#field'); }} />
    </div>
    <div>
      <Button text="Input" variant="link" onClick={() => { scrollToComponent('#input'); }} />
    </div>
    <div>
      <Button text="Select" variant="link" onClick={() => { scrollToComponent('#select'); }} />
    </div>
    <div>
      <Button text="Select Field" variant="link" onClick={() => { scrollToComponent('#select-field'); }} />
    </div>
    <Markdown id="field-docs" src={FieldDocs} />
    <PropsTable id="field-props" src={FieldSrc} />
    <FieldExamples />
    <Markdown id="fieldset-docs" src={FieldsetDocs} />
    <PropsTable id="fieldset-props" src={FieldsetSrc} />
    <FieldsetExamples />
    <Markdown id="input-docs" src={InputDocs} />
    <PropsTable id="input-props" src={InputSrc} />
    <InputExamples />
    <Markdown id="select-docs" src={SelectDocs} />
    <PropsTable id="select-props" src={SelectSrc} />
    <SelectExamples />
    <Markdown id="select-field-docs" src={SelectFieldDocs} />
    <PropsTable id="select-field-props" src={SelectFieldSrc} />
    <SelectFieldExamples />
    <Markdown id="controlled-example" src={ControlledInputDocs} />
    <ControlledInput />
  </div>
);

export default FormsExamples;
