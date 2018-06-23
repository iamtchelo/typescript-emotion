import styled from 'react-emotion';
import { RenderType } from './list.hoc';
import {
  avatarStyle,
  cardListStyle,
  cardStyle,
  containerStyle,
  listContentStyle,
  listNavItemActivedStyle,
  listNavItemStyle,
  listNavStyle,
  listWrapperStyle,
  pokemonNameStyle,
  titleStyle
} from './list.styles';

export interface TitleProps {
  size?: number;
}

export interface ListItem {
  actived?: boolean;
}

export interface ContentProps {
  renderType: RenderType;
}

export const ListWrapper = styled('div')`
  ${listWrapperStyle};
`;

export const Container = styled('div')`
  ${containerStyle};
`;

export const Title = styled('h1')`
  ${titleStyle};
`;

export const ListContent = styled('div')`
  ${listContentStyle};
`;

export const Card = styled('div')`
  ${cardStyle};
  ${cardListStyle};
`;

export const PokemonAvatar = styled('img')`
  ${avatarStyle};
`;

export const PokemonName = styled('h4')`
  ${pokemonNameStyle};
`;

export const ListNav = styled('div')`
  ${listNavStyle};
`;

export const ListNavItem = styled('button')`
  ${listNavItemStyle};
  ${listNavItemActivedStyle};
`;