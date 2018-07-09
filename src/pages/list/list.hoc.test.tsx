import { mount } from 'enzyme';
import * as React from 'react';
import { getDisplayName } from 'recompose';
import enhance, { EnhancedListProps } from './list.hoc';

describe('<List.Hoc />', () => {
  const Base = () => <div />;
  const EnhancedComponent = enhance(Base);

  it('should verify the hoc name', () => {
    expect(getDisplayName(EnhancedComponent)).toEqual('List.Hoc');
  });

  it('renderType should be grid', () => {
    const wrapper = mount(<EnhancedComponent renderType="grid" />);
    const props = wrapper.find<EnhancedListProps>(Base).props();

    expect(props.renderType).toEqual('grid');
  });

  it('should change renderType', () => {
    const wrapper = mount(<EnhancedComponent renderType="grid" />);
    const { setRenderType } = wrapper.find<EnhancedListProps>(Base).props();

    setRenderType('list');
    wrapper.update();

    const { renderType } = wrapper.find<EnhancedListProps>(Base).props();
    expect(renderType).toEqual('list');
  });
});