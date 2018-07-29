import styled from 'react-emotion';

export const ListWrapper = styled('div')``;

export const Container = styled('div')`
  width: 100%;
  max-width: 950px;
  margin: auto;
`;

export const ActionsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  & > div {
    margin: 0 20px;
  }

  @media (max-width: 580px) {
    flex-direction: column-reverse;
    align-items: center;

    & > div:first-child {
      padding: 15px 0;
    }
  }
`;
