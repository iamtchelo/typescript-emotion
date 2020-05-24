import styled, {css} from 'react-emotion';

const cardBase = ({theme}: any) => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.primary};
  box-shadow: 0 0 5px rgba(0, 0, 5px, rgba(0, 0, 0, 0.1));

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.primaryHover};
  }
`;

const cardImage = () => css`
  margin: auto;
  padding: 5px;
  width: 100%;
  height: auto;
  border: 5px solid white;
`;

const cardTitle = ({theme}: any) => css`
  padding: 10px 0;
  text-align: center;
  text-transform: capitalize;
  font-weight: normal;
  background-color: white;
  color: ${theme.card.cardTitle};
`;

const CardWrapper = styled('div')`
  ${cardBase};
`;

const CardImage = styled('img')`
  ${cardImage};
`;

const CardTitle = styled('h4')`
  ${cardTitle};
`;

export {CardWrapper, CardImage, CardTitle};
