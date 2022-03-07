import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {
  href?: string;
}
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
