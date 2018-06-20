import * as React from 'react';
import pokemons from '../../data/mock';
import { 
  Card,
  ListContent,
  ListWrapper, 
  PokemonAvatar,
  PokemonName,
  Title
} from './list.elements';

const List: React.SFC = props => (
  <ListWrapper>
    <Title size={1.5}>TypeScript + Emotion = ♥</Title>
    <ListContent>
      {pokemons.map(pokemon =>
        <Card key={pokemon.name}>
          <PokemonAvatar src={pokemon.avatar} />
          <PokemonName>{pokemon.name}</PokemonName>
        </Card>
      )}
    </ListContent>
  </ListWrapper>
);

export default List;