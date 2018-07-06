import { ComponentEnhancer, compose, setDisplayName, withState } from 'recompose';

export interface ListProps {
  renderType?: 'grid' | 'list';
  theme?: 'primary' | 'secondary';
}

export interface ListDispatches {
  setRenderType: (type: 'grid' | 'list') => void;
  setTheme: (theme: 'primary' | 'secondary') => void;
}

export type EnhancedListProps = ListProps & ListDispatches;

const withRender = compose(
  withState('renderType', 'setRenderType', ({ renderType = 'grid' }: any) => renderType)
);

const withTheme = compose(
  withState('theme', 'setTheme', ({ theme = 'primary' }: any) => theme)
);

export default compose(
  setDisplayName('List.Hoc'),
  withRender,
  withTheme
) as ComponentEnhancer<EnhancedListProps, ListProps>;
