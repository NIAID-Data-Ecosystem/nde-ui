import React from 'react';
import {
  Button,
  Icon,
  Flex,
  SystemProps,
  useDisclosure,
  ButtonProps,
  Text,
} from '@chakra-ui/react';
import {FaChevronDown} from 'react-icons/fa';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {theme} from 'src/theme';

// Expandable container.
export interface ToggleContainerProps extends ButtonProps {
  defaultIsOpen?: boolean;
  // can be a number describing the minimum num of lines or a minmax tuple.
  noOfLines?: [number, number] | number;
  ariaLabel: string;
  alignIcon?: SystemProps['alignItems'];
  variant?: 'border';
}

const StyledButton = styled(Button)<ButtonProps>`
  ${props =>
    props.variant === 'border' &&
    css`
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: ${theme.colors.gray[200]};
    `}
`;

StyledButton.defaultProps = {
  transition: 'all 0.2s ease-in-out',
  whiteSpace: 'normal',
  color: 'text.body',
  lineHeight: 'inherit',
  height: 'unset',
  textAlign: 'unset',
  borderRadius: 'none',
  _hover: {
    bg: 'blackAlpha.50',
    transition: 'all 0.2s ease-in-out',
  },
  _active: {
    bg: 'blackAlpha.100',
  },
};

export const ToggleContainer: React.FC<ToggleContainerProps> = ({
  children,
  defaultIsOpen = false,
  alignIcon = 'center',
  noOfLines,
  minHeight,
  ariaLabel,
  variant,
  ...props
}) => {
  const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen});

  // Set minimum number of lines shown when container is not expanded
  const minNoOfLines = Array.isArray(noOfLines)
    ? noOfLines[0]
    : typeof noOfLines === 'number'
    ? noOfLines
    : undefined;
  // Set maximum number of lines shown when container is expanded, if undefined, show all text.
  const maxNoOfLines = Array.isArray(noOfLines) ? noOfLines[1] : undefined;

  return (
    <StyledButton
      variant={variant}
      bg={isOpen ? 'blackAlpha.50' : 'white'}
      onClick={isOpen ? onClose : onOpen}
      flexWrap={['wrap', 'nowrap']}
      ariaLabel={ariaLabel}
      alignItems={alignIcon}
      {...props}
    >
      <Flex
        overflow={'hidden'}
        height={isOpen ? undefined : minHeight}
        noOfLines={isOpen ? maxNoOfLines : minNoOfLines}
      >
        {children}
      </Flex>
      <Flex
        className='icon'
        flexDirection={'column'}
        h={'100%'}
        alignItems='center'
        pl={[2, 4]}
        pt={[2, 0]}
        justifyContent={alignIcon}
      >
        <Icon
          w={3}
          h={3}
          color='gray.700'
          as={FaChevronDown}
          transform={isOpen ? 'rotate(-180deg)' : undefined}
          transformOrigin={'center'}
          transition={'transform 0.2s'}
        />
      </Flex>
    </StyledButton>
  );
};