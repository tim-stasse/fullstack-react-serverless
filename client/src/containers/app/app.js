// @flow
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../../images/logo.svg';
import './app.css';

export class App extends Component<{}> {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <Button color="primary" className="mt-3">
          Click me!
        </Button>
      </div>
    );
  }
}
