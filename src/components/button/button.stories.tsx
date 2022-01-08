import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    colorScheme: {
      options: ['primary', 'secondary', 'gray'],
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

export const SolidVariant: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args} colorScheme='primary'>
      Primary
    </Button>

    <Button {...args} colorScheme='secondary'>
      Secondary
    </Button>

    <Button {...args} colorScheme='gray'>
      Gray
    </Button>
  </>
);
