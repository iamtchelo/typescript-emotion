import styled from 'react-emotion';
import { GroupButtonProps } from './GroupButton';

export const GroupButtonWrapper = styled('div')`
  display: flex;
  padding: 40px 0;
  flex-direction: ${({ direction }: GroupButtonProps) => {
    return direction === 'left' ? 'row' : 'row-reverse'}
  };
`;
