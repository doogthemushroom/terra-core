# Terra Onset Picker

The terra-onset-picker component provides users a way to enter or select an approximate date.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-onset-picker`
  - `yarn add terra-onset-picker`

## Usage
```jsx
import React from 'react';
import OnsetPicker from 'terra-onset-picker';

<OnsetPicker age={moment().subtract(6, 'years').format()} />
```
