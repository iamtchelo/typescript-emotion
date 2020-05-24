import * as React from 'react';
import {GridStyled} from './grid.styles';

interface GridProps {
  renderType?: 'grid' | 'list';
}

const Grid: React.SFC<GridProps> = ({renderType = 'grid', children}) => (
  <GridStyled renderType={renderType}>{children}</GridStyled>
);

export {Grid, GridProps};
