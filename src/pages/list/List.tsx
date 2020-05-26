import * as React from 'react';
import {Card, Grid} from '../../components';
import {pokemonService} from '../../services';

const List: React.FunctionComponent<any> = ({renderType}) => {
  const service = React.useMemo(() => pokemonService(), []);
  const [response, setResponse] = React.useState({
    data: [],
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    const fetchPokemons = async () => {
      setResponse({...response, loading: true});

      try {
        const data = await service.fetchPokemons({limit: 300});
        setResponse({
          data,
          error: false,
          loading: false,
        });
      } catch {
        setResponse({...response, loading: false, error: true});
      }
    };

    fetchPokemons();
  }, []);

  if (response.loading) {
    return <span>Fetching pokemons...</span>;
  }

  if (response.error) {
    return <span>Error while fetching pokemons :/</span>;
  }

  return (
    <Grid renderType={renderType}>
      {response.data.map((pokemon: any) => (
        <Card
          key={pokemon.name}
          title={pokemon.name}
          image={service.getPokemonURL(pokemon)}
        />
      ))}
    </Grid>
  );
};

export {List};
