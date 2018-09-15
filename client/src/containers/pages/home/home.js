// @flow
import React from 'react';
import logo from '../../../images/logo.svg';
import './home.css';

export const Home = () => (
  <section className="text-center">
    <div className="w-100">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h1 className="home-title">Welcome to React</h1>
      </header>
    </div>
  </section>
);
