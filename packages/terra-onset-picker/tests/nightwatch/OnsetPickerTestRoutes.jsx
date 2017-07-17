/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import OnsetPickerTests from './OnsetPickerTests';

import DefaultOnset from './component/Default';

const routes = (
  <div>
    <Route path="/tests/onset-picker" component={OnsetPickerTests} />
    <Route path="/tests/onset-picker/default" component={DefaultOnset} />
  </div>
);

export default routes;
