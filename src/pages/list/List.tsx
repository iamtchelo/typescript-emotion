import * as React from 'react';
import { 
  Card,
  ListContent,
  ListWrapper, 
  PokemonAvatar,
  PokemonName,
  Title
} from './list.elements';

const arr = Array.from({ length: 60 }, (n, i) => i + 1);
const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back';

const List: React.SFC = props => (
  <ListWrapper>
    <Title size={1.5}>TypeScript + Emotion = ♥</Title>
    <ListContent>
      {arr.map(v =>
        <Card key={v}>
          <PokemonAvatar src={`${pokemonImage}/${v}.png`} />
          <PokemonName>Picachu</PokemonName>
        </Card>
      )}
    </ListContent>
  </ListWrapper>
);

export default List;