import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  Button,
  Icon,
  Flex,
  SystemProps,
  useDisclosure,
  ButtonProps,
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

  /**
   * Detect whether to allow toggle by checking if container is larger than set height.
   */
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const handleOverflow = useCallback(() => {
    const container = containerRef.current;
    setIsOverflowing(() => {
      if (container) {
        return container.scrollHeight > container.clientHeight;
      }
      return false;
    });
  }, [containerRef]);

  useEffect(() => {
    handleOverflow();
    window.addEventListener('resize', handleOverflow);
    return () => window.removeEventListener('resize', handleOverflow);
  }, []);

  useEffect(() => {
    handleOverflow();
  }, [isOpen]);

  // Possible to toggle drawer when drawer is close with oversized inner content or is open.
  const isExpandable = (isOverflowing && !isOpen) || isOpen;
  return (
    <StyledButton
      variant={variant}
      bg={isOpen ? 'blackAlpha.50' : 'white'}
      onClick={() => (isOpen ? onClose() : onOpen())}
      flexWrap={['wrap', 'nowrap']}
      aria-label={ariaLabel}
      alignItems={alignIcon}
      isDisabled={!isExpandable}
      _hover={{
        bg: 'blackAlpha.100',
      }}
      _disabled={{
        opacity: 1,
        bg: 'white',
        _hover: {bg: 'white', cursor: 'default'},
        _active: {bg: 'white'},
      }}
      px={[2, 4, 8, 10]}
      py={[2, 4, 6]}
      {...props}
    >
      <Flex
        ref={containerRef}
        overflow={'hidden'}
        height={isOpen ? undefined : minHeight}
        noOfLines={isOpen ? maxNoOfLines : minNoOfLines}
      >
        {children}
      </Flex>
      {(isOpen || (!isOpen && isOverflowing)) && (
        <Flex
          className='icon'
          flexDirection='column'
          w='100%'
          h='100%'
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
            transformOrigin='center'
            transition='transform 0.2s'
          />
        </Flex>
      )}
    </StyledButton>
  );
};
