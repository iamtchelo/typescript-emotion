import {compose, setDisplayName, withState} from 'recompose';

const DEFAULT_RENDER_TYPE = 'grid';

const withRenderState = compose(
  withState(
    'renderType',
    'setRenderType',
    ({renderType = DEFAULT_RENDER_TYPE}: any) => renderType
  )
);

const withRender = compose(
  setDisplayName('WithRender.Hoc'),
  withRenderState
);

export {withRender};
