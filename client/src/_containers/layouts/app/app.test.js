import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './app';

describe('<AppLayout />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
  });
});
