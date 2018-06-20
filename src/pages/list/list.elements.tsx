import styled from 'react-emotion';

import { avatarStyle, cardStyle, listContentStyle, listWrapperStyle, pokemonNameStyle, titleStyle } from './list.styles';

export interface TitleProps {
  size?: number;
}

export const ListWrapper = styled('div')`
  ${listWrapperStyle};
`;

export const Title = styled('h1')`
  ${titleStyle};
`;

export const ListContent = styled('div')`
  ${listContentStyle};
`;

export const Card = styled('div')`
  ${cardStyle};
`;

export const PokemonAvatar = styled('img')`
  ${avatarStyle};
`;

export const PokemonName = styled('h4')`
  ${pokemonNameStyle};
`;