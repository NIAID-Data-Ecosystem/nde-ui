import {ComponentStyleConfig} from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  baseStyle: props => {
    return {
      display: 'inline',
      svg: {
        color: 'currentColor',
      },
      '.child-string': {
        width: '100%',
        display: 'inline',
        alignItems: 'baseline',
        color: props.color || 'link.color',
        lineHeight: 'base',
        borderBottom: props.borderBottom || '0.0625rem solid',
      },

      '.child-node': {
        width: '100%',
        display: 'inline',
        alignItems: 'baseline',
        color: props.color || 'link.color',
        lineHeight: 'base',
        // For nested text elements
        p: {
          display: 'inline',
          color: 'inherit',
          borderBottom: props.borderBottom || '0.0625rem solid',
        },
      },

      ':hover': {
        textDecoration: 'none',
        '.child-string, .child-node': {
          borderBottom: 'none',
          color: props?._hover?.color || 'link.color',
          p: {
            borderBottomColor: 'transparent',
          },
        },
        svg: {
          color: props?._hover?.color || 'link.color',
        },
      },

      ':visited': {
        '.child-string, .child-node': {
          color: props?._visited?.color || 'link.visited',
          // For nested text elements
          p: {
            display: 'inline',
            color: props?._visited?.color || 'link.visited',
          },
        },
        svg: {
          color: props?._visited?.color || 'link.visited',
        },

        ':hover': {
          borderBottom: 'none',
          '.child-string, .child-node': {
            borderBottom: 'none',
          },
        },
      },
    };
  },

  variants: {
    // underline on hover.
    button: () => {
      return {
        textDecoration: 'none',
        borderBottom: 'none',
        '.child-string, .child-node': {
          borderBottom: 'none',
          textDecoration: 'none',
        },
        ':visited': {
          textDecoration: 'none',

          '.child-string, .child-node': {
            textDecoration: 'none',
            borderBottom: 'none',
          },
        },
        ':hover, :visited:hover': {
          '.child-string, .child-node': {
            borderBottom: '0.0625rem solid',
          },
        },
      };
    },
    unstyled: () => {
      return {
        textDecoration: 'none',
        '.child-string, .child-node': {
          borderBottom: 'none',
          textDecoration: 'none',
        },
        ':visited': {
          textDecoration: 'none',

          '.child-string, .child-node': {
            textDecoration: 'none',
            borderBottom: 'none',
          },
        },
        ':hover, :visited:hover': {
          textDecoration: 'none',

          '.child-string, .child-node': {
            textDecoration: 'none',
            borderBottom: 'none',
          },
        },
      };
    },
  },
};
