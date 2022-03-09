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
        lineHeight: 'base',
      },

      '.child-string, .child-node p': {
        borderBottom: props.borderBottom || '0.0625rem solid',
      },

      ':hover': {
        color: props?._hover?.color || 'link.color',
        '.child-string, .child-node, .child-node p': {
          borderBottomColor: 'transparent',
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
            borderBottomColor: 'transparent',
          },
        },
      },
    };
  },

  variants: {
    // underline on hover.

    unstyled: props => {
      return {
        '.child-string, .child-node p': {
          borderBottomColor: 'transparent',
        },
        ':hover': {
          color: props?._hover?.color || 'link.color',
          '.child-string, .child-node, .child-node p': {
            borderBottomColor: 'transparent',
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
              borderBottomColor: 'transparent',
              color: 'inherit',
            },
          },
        },
      };
    },
  },
};
