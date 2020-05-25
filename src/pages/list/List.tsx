import * as React from 'react';
import {Card, Grid} from '../../components';
import pokemons from '../../data/mock';

const List: React.SFC<any> = ({renderType}) => (
  <Grid renderType={renderType}>
    {pokemons.map((pokemon) => (
      <Card key={pokemon.name} title={pokemon.name} image={pokemon.avatar} />
    ))}
  </Grid>
);

export {List};
