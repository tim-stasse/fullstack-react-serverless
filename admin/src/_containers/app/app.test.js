import { mount } from 'enzyme';
import React from 'react';
import { App } from './app';

describe('<App />', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
});
