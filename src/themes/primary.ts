const colors = {
  gray: '#414141',
  grayDark: '#808080',
  grayLight: '#E0E0E0',
  primary: '#4E3C88',
  purple: '#7769A2',
  purpleLight: '#DAD1F8',
  secondary: '#DAD1F8',
  white: '#FFFFFF'
};

const theme = {
  button: {
    background: colors.white,
    backgroundActived: colors.primary,
    backgroundHover: colors.purpleLight,
    borderColor: colors.primary,
    color: colors.gray,
  },
  card: {
    titleColor: colors.grayDark
  },
  colors,
  navbar: {
    background: colors.primary,
    titleColor: colors.white
  }
};

export default theme;
