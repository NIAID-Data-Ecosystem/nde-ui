import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {theme} from 'src/theme';

export const ThemeProvider: React.FC = ({children, ...props}) => {
  return (
    <ChakraProvider theme={theme} {...props}>
      {children}
    </ChakraProvider>
  );
};
