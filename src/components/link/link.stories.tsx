import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Link} from './link';
import {theme} from 'src/theme';

export default {
  title: 'Components/Link',
  component: Link,

  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: {summary: 'text|React.ReactElement'},
      },
    },
    color: {
      name: 'color',
      defaultValue: theme.colors.link.color,
      description: 'Color of unhovered link.',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: {summary: theme.colors.link.color},
        type: {summary: 'string'},
      },
    },
    _hover: {
      description: 'Color for a hovered link.',
      defaultValue: {
        color: 'niaid.color',
      },
      control: {
        type: 'object',
      },
      table: {
        defaultValue: {summary: theme.colors.niaid.color},
        type: {summary: 'object'},
      },
    },
    _visited: {
      description: 'Color for a visited link.',
      defaultValue: {
        color: 'link.visited',
      },
      control: {
        type: 'object',
      },
      table: {
        defaultValue: {summary: theme.colors.link.visited},
        type: {summary: 'object'},
      },
    },
    variant: {
      name: 'variant',
      description: `Underline styles for link where
      \n
      'base' | undefined: Unstyled text has an underline that appears on hover.
      \n
      'underline': Underline text decoration that disappears on hover.
      \n
      'unstyled': Text has no underline.
      `,
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [...Object.keys(theme.components.Link.variants), 'base'],
      },
      table: {
        defaultValue: {summary: 'undefined'},
        type: {summary: 'string'},
      },
    },

    /* Text Styles */

    isExternal: {
      defaultValue: false,
      table: {
        defaultValue: {summary: false},
      },
    },
    isTruncated: {
      defaultValue: false,

      table: {
        category: 'Text Properties',
      },
    },
    noOfLines: {
      control: {
        type: 'number',
      },
      table: {
        category: 'Text Properties',
      },
    },

    /* Hidden Controls */
    colorScheme: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  children: 'Default Link',
  href: '#',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  children: 'External Link',
  isExternal: true,
  href: '#',
};

export const UnderlineLink = Template.bind({});
UnderlineLink.args = {
  children: 'Underline Link',
  href: '#',
  variant: 'underline',
};

export const UnstyledLink = Template.bind({});
UnstyledLink.args = {
  children: 'Unstyled Link',
  href: '#',
  variant: 'unstyled',
};
