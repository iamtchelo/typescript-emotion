import styled from 'react-emotion';

const normalStyle = (props: any) => ({
  '&:hover': {
    background: props.theme.button.backgroundHover,
    color: props.theme.colors.white
  },
  background: props.theme.button.background,
  border: `1px solid ${props.theme.button.borderColor}`,
  color: props.theme.button.color,
  cursor: 'pointer',
  fontSize: '14px',
  outline: 'none',
  padding: '10px 40px',
  transition: 'background 0.1s linear, color 0.2s ease-out'
});

const activedStyle = (props: any) => props.actived && {
  '&, &:hover': {
    background: props.theme.button.backgroundActived,
    color: props.theme.colors.white
  }
};

export const Button = styled('button')(normalStyle, activedStyle);
