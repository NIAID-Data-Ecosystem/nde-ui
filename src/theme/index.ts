import {extendTheme, ThemeTypings} from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';
import styles from './styles';
import type {ColorModeOptions} from '@chakra-ui/system';
// import {ThemeTypings} from './generated-theme.types';
import {Colors} from './foundations/colors/colors.types';
import {Fonts} from './foundations/typography/typography.types';

export interface ThemeConfig extends ColorModeOptions {
  cssVarPrefix?: string;
}
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};
/*
Theme extended from Chakra-UI: https://chakra-ui.com/docs/theming/theme
*/

const overrides = {
  ...foundations,
  styles,
  components,
  config,
};

interface Theme extends Omit<ThemeTypings, 'colors' | 'fonts'>, Fonts {
  colors: Colors;
}

export const theme = extendTheme(overrides) as Theme;
