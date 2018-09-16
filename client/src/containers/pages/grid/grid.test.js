// @flow
import { mount } from 'enzyme';
import React from 'react';
import { Grid } from './grid';

describe('<Grid />', () => {
  it('renders without crashing', () => {
    mount(<Grid />);
  });
});
