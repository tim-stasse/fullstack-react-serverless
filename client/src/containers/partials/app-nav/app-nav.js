// @flow
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
import { withCollapseState } from '../../../components';
import { routes } from '../../../constants';
import logo from '../../../images/logo.svg';
import './app-nav.css';

export const AppNav = withCollapseState(
  ({ isCollapseOpen, toggleCollapse }) => (
    <header className="app-nav">
      <Navbar color="dark" dark expand="sm" fixed="top">
        <LinkContainer
          to={routes.app.root}
          className="flex-center pl-1 view zoom">
          <NavbarBrand>
            <img src={logo} alt="logo" />
          </NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={toggleCollapse} />
        <Collapse isOpen={isCollapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <LinkContainer to={routes.app.home}>
                <NavLink>Home</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={routes.app.grid}>
                <NavLink>Grid</NavLink>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
);
