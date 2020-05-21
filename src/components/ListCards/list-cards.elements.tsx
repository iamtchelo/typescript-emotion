import styled, {css} from 'react-emotion';
import {ListCardsProps} from './ListCards';

const listCardsBase = () => css`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: auto;
`;

const listCardsGrid = ({renderType}: ListCardsProps) =>
  renderType === 'grid' &&
  css`
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  `;

const listCardsView = ({renderType}: ListCardsProps) =>
  renderType === 'list' &&
  css`
    justify-content: center;
    grid-template-columns: minmax(max-content, 250px);
  `;

export const ListCardsWrapper = styled('div')`
  ${listCardsBase};
  ${listCardsGrid};
  ${listCardsView};
`;
