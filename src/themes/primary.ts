const colors = {
  gray: '#414141',
  grayDark: '#808080',
  grayLight: '#E0E0E0',
  primary: '#80a1c1',
  primaryHover: '#7593b0',
  white: '#FFFFFF',
};

const theme = {
  button: {
    background: colors.white,
    backgroundActived: colors.primary,
    backgroundHover: colors.primaryHover,
    borderColor: colors.primary,
    color: colors.gray,
  },
  card: {
    titleColor: colors.grayDark,
  },
  colors,
  header: {
    background: colors.primary,
    titleColor: colors.white,
  },
};

export default theme;
