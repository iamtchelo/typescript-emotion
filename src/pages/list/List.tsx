import * as React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import GroupButton from '../../components/GroupButton';
import ListCards from '../../components/ListCards';
import Navbar from '../../components/Navbar';
import pokemons from '../../data/mock';
import ThemeProvider from '../../themes';
import { ActionsWrapper, Container, ListWrapper } from './list.elements';
import { EnhancedListProps } from './list.hoc';

const List: React.SFC<EnhancedListProps> = ({
  renderType,
  setRenderType,
  theme,
  setTheme
}) => (
  <ThemeProvider theme={theme}>
    <ListWrapper>
      <Navbar title="TypeScript + Emotion = ♥" />
      <Container>
        <ActionsWrapper>
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
          <GroupButton>
            <Button
            // tslint:disable-next-line
              onClick={() => setTheme('primary')}
              actived={theme === 'primary'}
            >
              Primary
            </Button>
            <Button
              // tslint:disable-next-line
              onClick={() => setTheme('secondary')}
              actived={theme === 'secondary'}
            >
              Secondary
            </Button>
          </GroupButton>
        </ActionsWrapper>
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
  </ThemeProvider>
);

export default List;