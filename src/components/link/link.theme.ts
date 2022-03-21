import {ComponentStyleConfig} from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  baseStyle: props => {
    return {
      display: 'inline',
      color: props.color || 'link.color',
      textDecoration: 'none',
      svg: {
        color: 'currentColor',
      },

      '.child-string, .child-node, .child-node p': {
        width: '100%',
        display: 'inline',
        alignItems: 'baseline',
        color: 'inherit',
      },

      '.child-string, .child-node p': {
        borderBottom: props.borderBottom || '0.0625rem solid',
      },

      ':hover': {
        color: props?._hover?.color || 'link.color',
        textDecoration: 'none',

        '.child-string, .child-node, .child-node p': {
          borderColor: 'transparent',
          color: 'inherit',
        },
      },

      ':visited': {
        color: props?._visited?.color || 'link.visited',
        '.child-string, .child-node, .child-node p, svg': {
          color: props?._visited?.color || 'link.visited',
        },

        ':hover': {
          borderBottom: 'transparent',
          '.child-string, .child-node, .child-node p': {
            borderColor: 'transparent',
          },
        },
      },
    };
  },

  variants: {
    ghost: props => {
      return {
        borderColor: 'transparent',
        '.child-string, .child-node, .child-node p': {
          color: 'inherit',
          borderColor: 'transparent',
        },
        '.child-string, .child-node p': {
          borderColor: 'transparent',
        },
        ':hover': {
          borderBottom: props.borderBottom || '0.0625rem solid',

          borderColor: props.color || 'link.color',
          '.child-string, .child-node, .child-node p': {
            borderBottom: props.borderBottom || '0.0625rem solid',
            borderColor: props.color || 'link.color',
          },
        },
        ':visited': {
          borderBottom: props.borderBottom || '0.0625rem solid',
          borderColor: 'transparent',
          '.child-string, .child-node, .child-node p, svg': {
            borderBottom: props.borderBottom || '0.0625rem solid',
            borderColor: 'transparent',
          },
          ':hover': {
            borderColor: props?._visited?.color || 'link.visited',
            '.child-string, .child-node, .child-node p': {
              borderColor: props?._visited?.color || 'link.visited',
            },
          },
        },
      };
    },
    unstyled: props => {
      return {
        '.child-string, .child-node p': {
          borderColor: 'transparent',
        },
        ':hover': {
          color: props?._hover?.color || 'link.color',
          '.child-string, .child-node, .child-node p': {
            borderColor: 'transparent',
            color: 'inherit',
          },
        },
        ':visited': {
          color: props?._visited?.color || 'link.visited',
          '.child-string, .child-node, .child-node p, svg': {
            color: props?._visited?.color || 'link.visited',
          },

          ':hover': {
            borderBottom: 'transparent',
            color: props?._visited?._hover?.color || 'link.visited',

            '.child-string, .child-node, .child-node p, svg': {
              borderColor: 'transparent',
              color: 'inherit',
            },
          },
        },
      };
    },
  },
};
