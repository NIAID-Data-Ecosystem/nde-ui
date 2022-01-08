import React from 'react';
import {theme} from 'src/theme/';
import {ColorSwatch} from 'src/storybook/components/color-swatch';

export const Monochrome: React.FC = () => {
  return (
    <>
      {Object.entries(theme.colors.gray).map(([colorKey, hex]) => {
        return (
          <ColorSwatch
            key={colorKey}
            title={`theme.colors.gray.${colorKey}`}
            hexValue={hex}
            hasBorder={+colorKey <= 50}
          ></ColorSwatch>
        );
      })}
    </>
  );
};
