import React from 'react';
import {Button, ButtonProps} from '../button';
import {
  ButtonGroup,
  ButtonGroupProps,
  Flex,
  FlexProps,
  VisuallyHidden,
} from '@chakra-ui/react';

/**
 * Container component for pagination.
 */

export interface PaginationProps extends FlexProps {}

export const Pagination: React.FC<PaginationProps> = ({children, ...props}) => {
  return (
    <Flex
      as='nav'
      borderRadius='semi'
      overflow='hidden'
      boxShadow='base'
      {...props}
    >
      <VisuallyHidden>
        <h4>Pagination</h4>
      </VisuallyHidden>
      {children}
    </Flex>
  );
};

/**
 * Button group for pages. Handles display depending on number of pages.
 */
export interface PaginationButtonGroupProps extends ButtonGroupProps {}

export const PaginationButtonGroup: React.FC<PaginationButtonGroupProps> = ({
  children,
  ...props
}) => {
  const totalPages = React.Children.count(children);
  /*
  If there are too many page buttons we limit which ones are showing based on which button is currently active.
  */
  if (totalPages > 5) {
    const isActiveIndex = React.Children.map(children, (child, i) => {
      // Props doesn't exist on child of type number or string
      if (React.isValidElement(child) && child?.props?.isActive) {
        return i;
      }
      return null;
    });

    // Active index should exist
    if (
      isActiveIndex &&
      isActiveIndex.length > 0 &&
      isActiveIndex[0] !== null
    ) {
      const activeIndex = isActiveIndex[0];
      // list of child indexes to show based on the current active index.
      let indexList = [activeIndex - 1, activeIndex, activeIndex + 1];

      if (activeIndex === 0) {
        indexList = [activeIndex, activeIndex + 1, activeIndex + 2];
      }
      if (activeIndex === totalPages - 1) {
        indexList = [activeIndex - 2, activeIndex - 1, activeIndex];
      }

      const Ellipsis = ({isVisible}: {isVisible: boolean}) => {
        return (
          <Flex mx={4} alignItems='end' color='niaid.placeholder'>
            {isVisible ? '...' : ''}
          </Flex>
        );
      };

      return (
        <>
          <Ellipsis isVisible={!indexList.includes(0)} />
          <ButtonGroup {...props}>
            {React.Children.map(children, (child, i) => {
              if (indexList.includes(i)) return child;
            })}
          </ButtonGroup>
          <Ellipsis isVisible={!indexList.includes(totalPages - 1)} />
        </>
      );
    }
  }
  // Show all buttons if less than 5 elements.
  return <ButtonGroup {...props}>{children}</ButtonGroup>;
};

/**
 * Pagination page button.
 */
export interface PaginationButtonProps extends ButtonProps {
  title?: string; // Descriptionfor accessibility.
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  isActive,
  title,
  ...props
}) => {
  return (
    <Button
      colorScheme='primary'
      px={2}
      m={1}
      variant={isActive ? 'solid' : 'outline'}
      isActive={isActive}
      title={
        title || typeof children == 'string'
          ? `Go to page ${children}`
          : undefined
      }
      size='md'
      {...props}
    >
      <VisuallyHidden>Page</VisuallyHidden>
      {children}
    </Button>
  );
};
