import { ComponentEnhancer, compose, setDisplayName, withState } from 'recompose';
import { EnhancedThemeProviderProps } from '../../themes/ThemeProvider';

export interface ListProps {
  renderType?: 'grid' | 'list';
}

export interface ListDispatches {
  setRenderType: (type: 'grid' | 'list') => void;
}

export type EnhancedListProps = EnhancedThemeProviderProps & ListProps & ListDispatches;

const withRender = compose(
  withState('renderType', 'setRenderType', ({ renderType = 'grid' }: any) => renderType)
);

export default compose(
  setDisplayName('List.Hoc'),
  withRender
) as ComponentEnhancer<EnhancedListProps, ListProps>;
