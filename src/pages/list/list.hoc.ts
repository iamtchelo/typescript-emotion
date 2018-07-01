import { ComponentEnhancer, compose, setDisplayName, withState } from 'recompose';

export interface ListProps {
  renderType?: 'grid' | 'list';
}

export interface ListDispatches {
  setRenderType: (type: 'grid' | 'list') => void;
}

export type EnhancedListProps = ListProps & ListDispatches;

export default compose(
  setDisplayName('List.Hoc'),
  withState('renderType', 'setRenderType', ({ renderType = 'grid' }: any) => renderType)
) as ComponentEnhancer<EnhancedListProps, ListProps>;
