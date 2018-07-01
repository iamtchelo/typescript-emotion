import * as React from 'react';
import { GroupButtonWrapper } from './group-button.elements';

export interface GroupButtonProps {
  direction?: 'left' | 'right';
}

const GroupButton: React.SFC<GroupButtonProps> = ({ direction = 'right', children }) => (
  <GroupButtonWrapper direction={direction}>
    {children}
  </GroupButtonWrapper>
);

export default GroupButton;
