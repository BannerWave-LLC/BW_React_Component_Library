import { configure, addDecorator, addParameters } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    // apply the custom options
    // setCustomOptions();
    configure(require.context('../src', true, /\.stories\.js/), module);
  }
});