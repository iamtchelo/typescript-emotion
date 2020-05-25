import * as React from 'react';
import {Header} from '../../Header';
import {Select} from '../../Select';
import {
  Actions,
  BaseLayoutWrapper,
  Center,
  ContainerItem,
  Flex,
  HeaderItem,
  Title,
} from './baseLayout.styles';

const BaseLayout: React.SFC<any> = ({setTheme, setRenderType, children}) => (
  <BaseLayoutWrapper>
    <HeaderItem>
      <Header>
        <Flex>
          <Title>TypeScript + Emotion = ♥</Title>
          <Actions>
            <Select
              label="Theme"
              options={[
                {value: 'primary', text: 'Primary'},
                {value: 'secondary', text: 'Secondary'},
              ]}
              onChange={(event: any) => setTheme(event.target.value)}
            />
            <Select
              label="Render mode"
              options={[
                {value: 'grid', text: 'Grid'},
                {value: 'list', text: 'List'},
              ]}
              onChange={(event: any) => setRenderType(event.target.value)}
            />
          </Actions>
        </Flex>
      </Header>
    </HeaderItem>
    <ContainerItem>
      <Center>{children}</Center>
    </ContainerItem>
  </BaseLayoutWrapper>
);

export {BaseLayout};
