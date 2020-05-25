import * as React from 'react';
import {SelectStyled, SelectWrapper} from './select.styles';

interface Option {
  value: any;
  text: string;
}

interface SelectProps {
  options: Option[];
  value?: any;
  onChange?: (event: any) => any;
}

const Select: React.SFC<SelectProps> = ({options, value, onChange}) => {
  return (
    <SelectWrapper>
      <SelectStyled onChange={onChange}>
        {options.map((option) => (
          <option value={option.value} selected={option.value === value}>
            {option.text}
          </option>
        ))}
      </SelectStyled>
    </SelectWrapper>
  );
};

export {Select};
