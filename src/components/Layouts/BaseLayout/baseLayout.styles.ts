import styled, {css} from 'react-emotion';

const baseLayout = () => css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(60px, auto);
`;

const headerItem = () => css`
  position: sticky;
  top: 0;
  grid-column: 1 / 7;
  grid-row: 1 / 2;
`;

const containerItem = () => css`
  padding: 2rem;
  grid-column: 1 / 7;
  grid-row: 2 / span 4;
`;

const center = () => css`
  max-width: 960px;
  margin: 0 auto;
`;

const flex = () => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const title = () => css`
  color: white;
  margin-bottom: 1rem;
  font-weight: normal;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const actions = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div:first-child {
    margin-right: 1rem;
  }
`;

const BaseLayoutWrapper = styled('div')`
  ${baseLayout};
`;

const HeaderItem = styled('div')`
  ${headerItem};
`;

const ContainerItem = styled('div')`
  ${containerItem};
`;

const Center = styled('div')`
  ${center};
`;

const Flex = styled('div')`
  ${center};
  ${flex};
`;

const Title = styled('h2')`
  ${title};
`;

const Actions = styled('div')`
  ${actions};
`;

export {
  BaseLayoutWrapper,
  HeaderItem,
  ContainerItem,
  Center,
  Flex,
  Title,
  Actions,
};
