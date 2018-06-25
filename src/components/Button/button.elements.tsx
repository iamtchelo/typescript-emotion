import styled, { css } from 'react-emotion';
import { ButtonProps } from './Button';

export const Button = styled('button')`
  padding: 10px 40px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #7769A2;
  color: #414141;
  background: white;
  transition: background 0.1s linear, color 0.2s ease-out;

  &:hover {
    background: #DAD1F8;
  }

  ${({ actived }: ButtonProps) => actived && css`
    &, &:hover {
      background: #4E3C88;
      color: white;
    }
  `};
`;