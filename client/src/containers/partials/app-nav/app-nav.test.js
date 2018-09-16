// @flow
import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppNav } from './app-nav';

describe('<AppNav />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AppNav />
      </BrowserRouter>
    );
  });
});
