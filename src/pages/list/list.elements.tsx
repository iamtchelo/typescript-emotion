import styled from 'react-emotion';

export const ListWrapper = styled('div')``;

export const Container = styled('div')`
  width: 950px;
  margin: auto;
`;

export const ActionsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  & > div {
    margin: 0 20px;
  }
`;
