import React from 'react';
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  TypographyProps,
  SystemProps,
} from '@chakra-ui/react';

export interface TextProps
  extends Omit<ChakraTextProps, keyof SystemProps>,
    TypographyProps {
  color?: string;
}

export const Text: React.FC<TextProps> = ({children, ...props}) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};
