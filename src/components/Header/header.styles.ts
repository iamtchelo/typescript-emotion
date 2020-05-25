import styled, {css} from 'react-emotion';

const headerBase = ({theme}: any) => css`
  padding: 1.2rem 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${theme.header.background};
`;

const HeaderStyled = styled('header')`
  ${headerBase};
`;

export {HeaderStyled};
