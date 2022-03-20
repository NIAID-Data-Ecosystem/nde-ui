import React, {useState} from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
  IconButton,
} from '@chakra-ui/react';
import {FaSearch} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';

export interface SearchInputProps extends InputProps {
  // Function fired when input is changed.
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Function fired button is submitted.
  handleSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  // Variant for button
  buttonVariant?: string;
  // Should input resize responsively
  isResponsive?: boolean;
  // Label for pop out button
  ariaLabel: string;
}

/**
 * Searchbar input field
 */
export const SearchInput: React.FC<SearchInputProps> = ({
  size = 'md',
  handleChange,
  handleSubmit,
  isResponsive = true,
  buttonVariant,
  ariaLabel,
  ...props
}) => {
  const [showInput, setShowInput] = useState(false);

  const sizeConfig: any = {
    sm: {
      width: '5.5rem',
      h: '1.7rem',
    },
    md: {
      width: '5.5rem',
      h: '2.5rem',
    },
    lg: {
      width: '6.5rem',
      h: '3rem',
    },
  };

  return (
    <Flex as='form' alignItems='center' position='relative' {...props}>
      <InputGroup
        // If in 'responsive mode' we use a button to toggle the visibility of the input in mobile size.
        visibility={[
          isResponsive && !showInput ? 'hidden' : 'visible',
          'visible',
        ]}
        size={size}
        _focusWithin={{
          svg: {color: `${props.colorScheme}.500`},
        }}
      >
        <InputLeftElement pointerEvents='none'>
          <FaSearch color='gray.300' />
        </InputLeftElement>
        <Input
          type='text'
          variant='shadow'
          size={size}
          onChange={e => handleChange(e)}
        />

        {/* If handle submit function is provided we show a button. */}
        {handleSubmit && (
          <InputRightElement p={1} width={sizeConfig[size].width}>
            <Button
              h={sizeConfig[size].h}
              size={size}
              colorScheme={props.colorScheme}
              aria-label='search'
              type='submit'
              onSubmit={e => handleSubmit(e)}
              d='flex'
            >
              Search
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {/* Button that toggles out input if in responsive mode. */}
      {isResponsive && (
        <IconButton
          display={['flex', 'none']}
          size={size}
          top={0}
          right={0}
          ml={4}
          aria-label={ariaLabel || 'Open search input'}
          icon={showInput ? <IoClose /> : <FaSearch />}
          colorScheme={props.colorScheme}
          variant={buttonVariant || 'outline'}
          onClick={() => setShowInput(!showInput)}
          isActive={showInput}
        />
      )}
    </Flex>
  );
};
