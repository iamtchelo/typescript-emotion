import { ComponentEnhancer, compose, setDisplayName, withState } from 'recompose';

export const enum RenderType {
  List, Grid
}

export interface ListProps {
  renderType: RenderType;
}

export interface ListDispatches {
  setRenderType: (type: RenderType) => void;
}

export type EnhancedListProps = ListProps & ListDispatches;

export default compose(
  setDisplayName('List.Hoc'),
  withState('renderType', 'setRenderType', ({ renderType }: any) => renderType)
) as ComponentEnhancer<EnhancedListProps, ListProps>;