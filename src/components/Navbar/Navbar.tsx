import * as React from 'react';
import { NavbarTitle, NavbarWrapper } from './navbar.elements';

export interface NavbarProps {
  title: string;
}

const Navbar: React.SFC<NavbarProps> = ({ title }) => (
  <NavbarWrapper>
    <NavbarTitle>{title}</NavbarTitle>
  </NavbarWrapper>
);

export default Navbar;