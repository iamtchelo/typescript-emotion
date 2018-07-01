import * as React from 'react';
import { ListCardsWrapper } from './list-cards.elements';

export interface ListCardsProps {
  renderType?: 'grid' | 'list';
}

const ListCards: React.SFC<ListCardsProps> = ({ renderType = 'grid', children }) => (
  <ListCardsWrapper renderType={renderType}>
    {children}
  </ListCardsWrapper>
);

export default ListCards;
