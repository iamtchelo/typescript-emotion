import * as React from 'react';
import {HeaderStyled} from './header.styles';

const Header: React.SFC<any> = ({children}) => (
  <HeaderStyled>{children}</HeaderStyled>
);

export {Header};
