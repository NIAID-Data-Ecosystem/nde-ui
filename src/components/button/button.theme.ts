export const Button = {
  // The styles all buttons have in common
  baseStyle: () => {
    return {
      borderRadius: 'base',
      fontWeight: 'normal',
      fontFamily: 'body',
      cursor: 'pointer',
      color: 'white',

      _hover: {
        color: 'inherit',
      },
    };
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
    solid: ({colorScheme}: {colorScheme: string}) => {
      let bg;
      let hoverBg;
      let color = 'white';

      if (colorScheme === 'negative') {
        bg = 'status.error';
        hoverBg = 'red.700';
      }
      if (colorScheme === 'gray') {
        color = 'text.heading';
      }
      return {
        bg,
        color: color,
        _hover: {
          color: color,
          bg: hoverBg,
          _disabled: {
            bg,
          },
        },
        _visited: {
          '.child-string, .child-node, .child-node p, svg': {color: 'white'},
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
        _visited: {
          '.child-string, .child-node, .child-node p, svg': {color: 'inherit'},
        },
      };
    },
    outline: ({colorScheme}: {colorScheme: string}) => {
      let color;
      let hoverBg;
      const bg = 'white';

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
        _visited: {
          color: 'inherit',

          '.child-string, .child-node, .child-node p, svg': {
            color: 'inherit',
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
