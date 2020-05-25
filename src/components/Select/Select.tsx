import * as React from 'react';
import {
  Label,
  SelectContainer,
  SelectStyled,
  SelectWrapper,
} from './select.styles';

interface Option {
  value: any;
  text: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  value?: any;
  onChange?: (event: any) => any;
}

const Select: React.SFC<SelectProps> = ({options, label, value, onChange}) => {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <SelectWrapper>
        <SelectStyled onChange={onChange}>
          {options.map((option) => (
            <option value={option.value} selected={option.value === value}>
              {option.text}
            </option>
          ))}
        </SelectStyled>
      </SelectWrapper>
    </SelectContainer>
  );
};

export {Select};
