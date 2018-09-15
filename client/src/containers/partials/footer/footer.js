// @flow
import dateFns from 'date-fns';
import React from 'react';

export const Footer = () => (
  <footer className="page-footer font-small stylish-color">
    <div className="footer-copyright py-3 text-center white-text">
      &copy; {dateFns.getYear(new Date())} Copyright
    </div>
  </footer>
);
