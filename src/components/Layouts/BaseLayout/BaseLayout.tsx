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
              onChange={(event: any) => setTheme(event.target.value)}
              options={[
                {value: 'primary', text: 'Primary'},
                {value: 'secondary', text: 'Secondary'},
              ]}
            />
            <Select
              onChange={(event: any) => setRenderType(event.target.value)}
              options={[
                {value: 'grid', text: 'Grid'},
                {value: 'list', text: 'List'},
              ]}
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
