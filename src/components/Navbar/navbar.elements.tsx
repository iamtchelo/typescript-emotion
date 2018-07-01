import styled from 'react-emotion';

export const NavbarWrapper = styled('nav')`
  padding: 15px 0;
  background: ${(props: any) => props.theme.navbar.background};
`;

export const NavbarTitle = styled('h3')`
  color: ${(props: any) => props.theme.navbar.titleColor};
  text-align: center;
`;