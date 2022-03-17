import React from 'react';
import {
  Box,
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useStyleConfig,
} from '@chakra-ui/react';
import {FaExternalLinkAlt} from 'react-icons/fa';

export interface LinkProps extends ChakraLinkProps {
  color?: string;
  variant?: 'base' | 'unstyled' | 'ghost';
}

export const Link: React.FC<LinkProps> = props => {
  const {variant, children, isExternal, ...rest} = props;

  // Get computed styles from theme.
  const styles = useStyleConfig('Link', {variant});
  if (typeof children === 'string') {
    return (
      <ChakraLink
        isExternal={isExternal}
        __css={styles}
        variant={variant}
        {...rest}
      >
        <Box className={'child-string'}>{children}</Box>
        {/* Show external icon when [isExternal] prop is true */}
        {isExternal && <Icon as={FaExternalLinkAlt} boxSize={3} ml={2} />}
      </ChakraLink>
    );
  }
  // Pass the computed styles into the `__css` prop
  return (
    <ChakraLink
      isExternal={isExternal}
      __css={styles}
      variant={variant}
      {...rest}
    >
      <Box className={'child-node'}>{children}</Box>
      {/* Show external icon when [isExternal] prop is true */}
      {isExternal && <Icon as={FaExternalLinkAlt} boxSize={3} ml={2} />}
    </ChakraLink>
  );
};
