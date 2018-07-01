import * as React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import GroupButton from '../../components/GroupButton';
import ListCards from '../../components/ListCards';
import Navbar from '../../components/Navbar';
import pokemons from '../../data/mock';
import { Container, ListWrapper } from './list.elements';
import { EnhancedListProps } from './list.hoc';

const List: React.SFC<EnhancedListProps> = ({
  renderType,
  setRenderType
}) => (
  <ListWrapper>
    <Navbar title="TypeScript + Emotion = ♥" />
    <Container>
      <GroupButton>
        <Button
        // tslint:disable-next-line
          onClick={() => setRenderType('grid')}
          actived={renderType === 'grid'}
        >
          Grid
        </Button>
        <Button
          // tslint:disable-next-line
          onClick={() => setRenderType('list')}
          actived={renderType === 'list'}
        >
          List
        </Button>
      </GroupButton>
      <ListCards renderType={renderType}>
        {pokemons.map(pokemon =>
          <Card
            key={pokemon.name}
            title={pokemon.name}
            image={pokemon.avatar}
          />
        )}
      </ListCards>
    </Container>
  </ListWrapper>
);

export default List;