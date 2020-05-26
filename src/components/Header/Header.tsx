import * as React from 'react';
import {HeaderStyled} from './header.styles';

const Header: React.FunctionComponent<any> = ({children}) => (
  <HeaderStyled>{children}</HeaderStyled>
);

export {Header};
