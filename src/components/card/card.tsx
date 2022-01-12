import React, {Children} from 'react';
import {
  Heading,
  ButtonGroup,
  useStyleConfig,
  Box,
  BoxProps,
  SystemProps,
  LayoutProps,
} from '@chakra-ui/react';

export interface CardProps
  extends Omit<BoxProps, keyof SystemProps>,
    LayoutProps {}

export const Card: React.FC<CardProps> = ({children, ...props}) => {
  const styles = useStyleConfig('Card');

  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  );
};

export const CardHeader: React.FC = ({children, ...props}) => {
  const styles = useStyleConfig('CardHeader');

  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  );
};

export const CardTitle: React.FC = ({children, ...props}) => {
  return (
    <Heading as='h3' size={'lg'} mr='3' mb='2' {...props}>
      {children}
    </Heading>
  );
};

export const CardActions: React.FC = ({children, ...props}) => {
  if (Children.count(children) === 1) {
    return (
      <Box mb='2' {...props}>
        {children}
      </Box>
    );
  }

  // if there are many children we put the buttons in a group
  return (
    <ButtonGroup mb='2' {...props}>
      {children}
    </ButtonGroup>
  );
};
