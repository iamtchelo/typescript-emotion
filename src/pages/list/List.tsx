import * as React from 'react';
import pokemons from '../../data/mock';
import {
  Card,
  Container,
  ListContent,
  ListNav,
  ListNavItem,
  ListWrapper,
  PokemonAvatar,
  PokemonName,
  Title
} from './list.elements';
import { EnhancedListProps, RenderType } from './list.hoc';

const List: React.SFC<EnhancedListProps> = ({
  renderType,
  setRenderType
}) => (
  <ListWrapper>
    <Title size={1.5}>TypeScript + Emotion = ♥</Title>
    <Container>
      <ListNav>
        <ListNavItem
          actived={renderType === RenderType.Grid}
          // tslint:disable-next-line
          onClick={() => setRenderType(RenderType.Grid)}
        >
          Grid
        </ListNavItem>
        <ListNavItem
          actived={renderType === RenderType.List}
          // tslint:disable-next-line
          onClick={() => setRenderType(RenderType.List)}
        >
          List
        </ListNavItem>
      </ListNav>
      <ListContent renderType={renderType}>
        {pokemons.map(pokemon =>
          <Card
            key={pokemon.name}
            renderType={renderType}
          >
            <PokemonAvatar src={pokemon.avatar} />
            <PokemonName>{pokemon.name}</PokemonName>
          </Card>
        )}
      </ListContent>
    </Container>
  </ListWrapper>
);

export default List;