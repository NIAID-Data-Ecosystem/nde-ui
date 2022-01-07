import React from 'react';
import {theme} from 'src/theme/';

export const ThemeColors = () => {
  const {colors} = theme;
  return (
    <>
      {Object.entries(colors.primary).map(([k, v]) => {
        return (
          <div key={k} title={`theme.colors.primary.${k}`}>
            {v}
          </div>
        );
      })}
    </>
  );
};
