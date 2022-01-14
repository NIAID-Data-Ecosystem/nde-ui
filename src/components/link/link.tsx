import React from 'react';
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useStyleConfig,
} from '@chakra-ui/react';
import {FaExternalLinkAlt} from 'react-icons/fa';

export interface LinkProps extends ChakraLinkProps {
  color?: string;
  variant?: 'base' | 'unstyled' | 'underline';
}

export const Link: React.FC<LinkProps> = props => {
  const {variant, children, isExternal, ...rest} = props;

  // Get computed styles from theme.
  const styles = useStyleConfig('Link', {variant});

  // Pass the computed styles into the `__css` prop
  return (
    <ChakraLink
      isExternal={isExternal}
      __css={styles}
      variant={variant}
      {...rest}
    >
      {children}
      {/* Show external icon when [isExternal] prop is true */}
      {isExternal && <Icon as={FaExternalLinkAlt} boxSize={3} ml={2} />}
    </ChakraLink>
  );
};
