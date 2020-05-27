import styled, {css} from 'react-emotion';
import ClipLoader from 'react-spinners/ClipLoader';

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

const loadingContainer = () => css`
  display: flex;
  padding: 2.5rem 0;
  min-height: 120px;
  justify-content: center;
  align-items: center;
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

const LoadingContainer = styled('div')`
  ${loadingContainer};
`;

const Loading = styled(ClipLoader)``;

const CardImage = styled('img')`
  ${cardImage};
`;

const CardTitle = styled('h4')`
  ${cardTitle};
`;

export {CardWrapper, LoadingContainer, Loading, CardImage, CardTitle};
