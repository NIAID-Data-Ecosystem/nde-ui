import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Text, Button} from '@chakra-ui/react';
import {SearchBar} from './search-bar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,

  argTypes: {
    buttonText: {
      description: 'Text displayed on submit button',
      table: {
        defaultValue: {summary: 'Search'},
        type: {
          summary: 'string',
        },
      },
      control: {type: 'text'},
    },
    placeholder: {
      description: 'Placeholder text displayed inside input element.',
      table: {
        defaultValue: {summary: 'Search for tool or dataset'},
        type: {
          summary: 'string',
        },
      },
      control: {type: 'text'},
    },
    value: {
      description: 'Controlled input value.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {type: 'text'},
    },
    hasSearchIcon: {
      description:
        'Boolean switch for displaying search icon in search button.',
      table: {
        defaultValue: {summary: true},
        type: {
          summary: 'string',
        },
      },
      control: {type: 'boolean'},
    },
    handleChange: {
      description: 'Controlled input function. Handles user input on change.',
      table: {
        category: 'event handlers',
        type: {
          summary: 'function',
        },
      },
      control: {type: 'function'},
    },
    handleClick: {
      description: 'On submit handler. Handles user search submit.',
      table: {
        category: 'event handlers',
        type: {
          summary: 'function',
        },
      },
      control: {type: 'function'},
    },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => {
  const [searchTerm, setSearchTerm] = useState(args.value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(e.target.value);

  useEffect(() => {
    setSearchTerm(args.value || '');
  }, [args.value]);
  return (
    <>
      <div>
        <h2>Search Input: {searchTerm || "' '"}</h2>
      </div>
      <SearchBar {...args} handleChange={handleChange} value={searchTerm} />
    </>
  );
};

export const SearchBarExample = Template.bind({});
SearchBarExample.args = {
  buttonText: 'Search',
  placeholder: 'Search for tool or dataset',
  hasSearchIcon: false,
  handleClick: () => {},
  handleChange: () => {},
};
