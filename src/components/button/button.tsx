import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  SystemProps,
} from '@chakra-ui/react';

export type ButtonProps = Omit<ChakraButtonProps, keyof SystemProps>;
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};
