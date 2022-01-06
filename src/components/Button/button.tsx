import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  SystemProps,
} from '@chakra-ui/react';

interface ButtonProps extends Omit<ChakraButtonProps, keyof SystemProps> {
  label?: string;
}
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({children, label, ...rest}) => {
  return <ChakraButton {...rest}>{label || children}</ChakraButton>;
};
