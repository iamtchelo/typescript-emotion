import styled, {css} from 'react-emotion';

const buttonBase = ({theme}: any) => css`
  padding: 10px 40px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  color: ${theme.button.color};
  background-color: ${theme.button.background};
  border: 1px solid ${theme.button.borderColor};
  transition: background-color 150ms linear, color 250ms ease-out;

  &:hover {
    background-color: ${theme.button.backgroundHover};
    color: ${theme.colors.white};
  }
`;

const buttonActived = ({theme, actived}: any) =>
  actived &&
  css`
    &,
    &:hover {
      background-color: ${theme.button.backgroundActived};
      color: ${theme.colors.white};
    }
  `;

const ButtonStyled = styled('button')`
  ${buttonBase};
  ${buttonActived};
`;

export {ButtonStyled};
