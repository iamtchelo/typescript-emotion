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

const List: React.SFC = props => (
  <ListWrapper>
    <Title size={1.5}>TypeScript + Emotion = ♥</Title>
    <Container>
      <ListNav>
        <ListNavItem actived={true}>Grid</ListNavItem>
        <ListNavItem>List</ListNavItem>
      </ListNav>
      <ListContent>
        {pokemons.map(pokemon =>
          <Card key={pokemon.name}>
            <PokemonAvatar src={pokemon.avatar} />
            <PokemonName>{pokemon.name}</PokemonName>
          </Card>
        )}
      </ListContent>
    </Container>
  </ListWrapper>
);

export default List;