import React from 'react';
import Base from 'terra-base';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <OnsetPicker birthdate="1997-07-17T09:21:15-05:00" />
  </Base>;
