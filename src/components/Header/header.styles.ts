import styled, {css} from 'react-emotion';

const headerBase = ({theme}: any) => css`
  padding: 1rem 0;
  background-color: ${theme.header.background};
`;

const HeaderStyled = styled('header')`
  ${headerBase};
`;

export {HeaderStyled};
