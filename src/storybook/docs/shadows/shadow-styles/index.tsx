import React from 'react';
import {SimpleGrid, Box} from '@chakra-ui/react';
import {VisualDescription} from 'src/storybook/components/visual-description';
import CustomThemeShadows from 'src/theme/foundations/shadows';

/**
 * Showcase for different space sizing in theme.
 */

interface ShadowStyles {}

export const ShadowStyles: React.FC<ShadowStyles> = () => {
  const shadowKeys = Object.keys(CustomThemeShadows);

  return (
    <SimpleGrid
      bg='page.alt'
      columns={{sm: 1, md: 2}}
      spacing='8'
      p='10'
      textAlign='center'
      rounded='lg'
      color='text.body'
    >
      {shadowKeys.map(shadowKey => {
        return (
          <VisualDescription
            key={shadowKey}
            title={`theme.shadows.${shadowKey}`}
          >
            <Box p='6' rounded='md' bg='white' boxShadow={shadowKey}>
              {shadowKey}
            </Box>
          </VisualDescription>
        );
      })}
    </SimpleGrid>
  );
};
