import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    colorScheme: {
      options: ['nde.primary', 'nde.secondary', 'gray'],
      table: {
        category: 'Color + Styling',
      },
    },
    variant: {
      options: ['solid', 'outline', 'link', 'ghost'],
      table: {
        defaultValue: 'solid',
        category: 'Color + Styling',
      },
    },
    isLoading: {
      control: 'boolean',
      table: {
        defaultValue: false,
        category: 'State Props',
      },
    },
    isDisabled: {
      control: 'boolean',
      table: {
        category: 'State Props',
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const SolidVariant: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args} colorScheme='nde.primary'>
      Primary
    </Button>

    <Button {...args} colorScheme='nde.secondary'>
      Secondary
    </Button>

    <Button {...args} colorScheme='gray'>
      Gray
    </Button>
  </>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
