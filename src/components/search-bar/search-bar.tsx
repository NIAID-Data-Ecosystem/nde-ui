import React, {useState} from 'react';
import {
  Flex,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  VisuallyHidden,
  Icon,
  BoxProps,
  ButtonProps,
  FlexProps,
  SystemProps,
  HTMLChakraProps,
} from '@chakra-ui/react';
import {FaSearch} from 'react-icons/fa';

export interface SearchBarProps {
  // Text on submit button.
  buttonText?: string;
  // Placeholder for input element.
  placeholder?: string;
  // Value inside input element.
  value?: string;
  // Show search icon.
  hasSearchIcon?: boolean;
  // Function fired when input is changed.
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Function fired button is submitted.
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  buttonText = 'Search',
  placeholder,
  value,
  hasSearchIcon = true,
  handleChange = () => {},
  handleClick,
  ...props
}) => {
  return (
    <Flex
      as={'form'}
      w={'100%'}
      flexDirection={'column'}
      maxW={['unset', 'unset', '70%', '50%']}
      {...props}
    >
      <InputGroup size={'lg'} flexDirection={'column'}>
        <Input
          bg='white'
          pr={4}
          type='text'
          placeholder={placeholder || 'Search for tool or dataset'}
          focusBorderColor={'primary.400'}
          value={value}
          onChange={handleChange}
        ></Input>
        {/* Mobile button */}
        <Button
          aria-label='search datasets'
          isDisabled={!value || value.length < 1}
          onClick={e => {
            e.preventDefault();
            handleClick(e);
          }}
          type={'submit'}
          display={['flex', 'flex', 'none']}
          colorScheme={'primary'}
          mt={1}
        >
          {buttonText}
          {hasSearchIcon && <Icon mx={2} as={FaSearch}></Icon>}
        </Button>
        {/* Desktop button */}
        <InputRightElement
          display={['none', 'none', 'flex']}
          mx={2}
          w={'unset'}
        >
          <Button
            aria-label='search'
            isDisabled={!value || value.length < 1}
            onClick={e => {
              e.preventDefault();
              handleClick(e);
            }}
            type={'submit'}
            colorScheme={'primary'}
            size={'md'}
            leftIcon={hasSearchIcon ? <FaSearch /> : undefined}
          >
            {buttonText}
          </Button>
          {hasSearchIcon && <VisuallyHidden>Search Icon</VisuallyHidden>}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
