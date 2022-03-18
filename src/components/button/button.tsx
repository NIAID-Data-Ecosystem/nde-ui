import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link,
  Icon,
  Text,
} from '@chakra-ui/react';
import {FaExternalLinkAlt} from 'react-icons/fa';

export interface ButtonProps extends ChakraButtonProps {
  href?: string;
  isExternal?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  isExternal,
  href,
  ...props
}) => {
  if (href) {
    return (
      <ChakraButton as={Link} href={href} {...props}>
        <Text color={'inherit'}>{children}</Text>
        {isExternal && <Icon as={FaExternalLinkAlt} boxSize={4} ml={2}></Icon>}
      </ChakraButton>
    );
  }
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
