import { mount } from 'enzyme';
import React from 'react';
import { Home } from './home';

describe('<Home />', () => {
  it('renders without crashing', () => {
    mount(<Home />);
  });
});
