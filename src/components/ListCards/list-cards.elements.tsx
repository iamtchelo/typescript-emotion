import styled, { css } from 'react-emotion';
import { ListCardsProps } from './ListCards';

export const ListCardsWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${({ renderType }: ListCardsProps) => renderType === 'grid' && css`
    flex-direction: row
  `};

  ${({ renderType }: ListCardsProps) => renderType === 'list' && css`
    align-content: center;
    flex-direction: column;

    & > div {
      width: 350px;
      height: 300px;
      border: 5px solid white;

      &:nth-child(even):hover,
      &:nth-child(odd):hover {
        transform: none;
      }

      & > img {
        width: 120px;
        border: none;
      }

      & > h4 {
        padding: 15px 0;
      }
    }
  `};
`;
