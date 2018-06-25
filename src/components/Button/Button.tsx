import * as React from 'react';
import { Button } from './button.elements';

export interface ButtonProps {
  onClick?: (event: any) => void;
  actived?: boolean;
}

const ButtonSFC: React.SFC<ButtonProps> = ({
  onClick,
  actived,
  children
}) => (
  <Button
    onClick={onClick}
    actived={actived}
  >
    {children}
  </Button>
);

export default ButtonSFC;