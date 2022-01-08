import React from 'react';
import {
  PageContainer,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from 'src/storybook/components/section';
import {theme} from 'src/theme';
import {TextStyles} from './text-styles';

export default {
  title: 'Foundations/Typography',
};

export const Typography = () => {
  const {fonts} = theme;
  const formatName = (fontFamily: string) => {
    if (fontFamily.toLowerCase().includes('martel')) {
      return 'Martel';
    }
    if (fontFamily.toLowerCase().includes('public sans')) {
      return 'Public Sans';
    }
  };

  return (
    <PageContainer>
      <SectionHeader>Typography</SectionHeader>
      {Object.entries(fonts).map(([type, fontFamily]) => {
        if (type === 'body' || type === 'heading') {
          return (
            <React.Fragment key={fontFamily}>
              <SectionTitle>{formatName(fontFamily)}</SectionTitle>
              <SectionContainer>
                <TextStyles fontFamily={fontFamily} />
              </SectionContainer>
            </React.Fragment>
          );
        }
      })}
    </PageContainer>
  );
};
