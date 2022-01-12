import React from 'react';
import {Text} from './text';
import {theme} from 'src/theme';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {controls: {sort: 'alpha'}},
  argTypes: {
    variant: {
      table: {disable: true},
    },
    size: {
      table: {disable: true},
    },

    fontWeight: {
      name: 'fontWeight',
      description: 'Different text font weights.',
      table: {
        type: {
          summary: 'string|number',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fontWeights),
      },
    },
    fontSize: {
      name: 'fontSize',
      description: 'Different text font sizes.',
      table: {
        type: {
          summary: 'string|number',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fontSizes),
      },
    },
    fontFamily: {
      name: 'fontFamily',
      description: 'Different text font families.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'select',
        options: Object.keys(theme.fonts),
      },
    },

    color: {
      name: 'color',
      default: theme.colors.text.body,
      control: {
        type: 'color',
      },
    },

    colorScheme: {
      table: {disable: true},
    },

    /* CSS properties */
    align: {
      table: {
        category: 'CSS properties',
      },
      control: {type: 'text'},
    },
    casing: {
      table: {
        category: 'CSS properties',
      },
      control: {type: 'text'},
    },
    decoration: {
      table: {
        category: 'CSS properties',
      },
      control: {type: 'text'},
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example Text',
  color: theme.colors.text.body,
  fontFamily: 'body',
  fontSize: 'md',
  fontWeight: 'normal',
  align: 'left',
  casing: 'capitalize',
  decoration: 'none',
};
