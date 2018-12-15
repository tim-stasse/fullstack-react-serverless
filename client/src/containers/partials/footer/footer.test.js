import { mount } from 'enzyme';
import React from 'react';
import { Footer } from './footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    mount(<Footer />);
  });
});
