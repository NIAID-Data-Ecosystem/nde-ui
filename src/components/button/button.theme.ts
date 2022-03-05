export const Button = {
  // The styles all buttons have in common
  baseStyle: {
    borderRadius: 'base',
    fontWeight: 'normal',
    fontFamily: 'body',
    cursor: 'pointer',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 8, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  variants: {
    link: {
      textDecoration: 'underline',
      color: 'link.color',
    },
    solid: ({colorScheme}: {colorScheme: string}) => {
      let bg;
      let hoverBg;

      if (colorScheme === 'negative') {
        bg = 'status.error';
        hoverBg = 'red.700';
      }
      return {
        bg,
        _hover: {
          bg: hoverBg,
          _disabled: {
            bg,
          },
        },
      };
    },
    ghost: ({colorScheme}: {colorScheme: string}) => {
      let bg;
      let hoverBg;

      if (colorScheme === 'negative') {
        hoverBg = 'red.100';
      }
      return {
        bg,
        _hover: {
          bg: hoverBg,
          _disabled: {
            bg,
          },
        },
      };
    },
    outline: ({colorScheme}: {colorScheme: string}) => {
      let color;
      let hoverBg;
      let bg;

      if (colorScheme === 'negative') {
        color = 'status.error';
        hoverBg = 'red.50';
      }
      return {
        border: '1px solid',
        color,
        bg,
        _hover: {
          bg: hoverBg,
          _disabled: {
            bg,
          },
        },
      };
    },
    unstyled: () => {
      return {
        background: 'transparent',
        _hover: {
          background: 'transparent',
        },
      };
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
};
