import * as React from 'react';
import {ButtonStyled} from './button.styles';

interface ButtonProps {
  onClick?: (event: any) => void;
  actived?: boolean;
}

const Button: React.SFC<ButtonProps> = ({onClick, actived, children}) => (
  <ButtonStyled onClick={onClick} actived={actived}>
    {children}
  </ButtonStyled>
);

export {Button, ButtonProps};
