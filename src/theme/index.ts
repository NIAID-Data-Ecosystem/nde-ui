import {extendTheme, ThemeTypings} from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';
import styles from './styles';
import type {ColorModeOptions} from '@chakra-ui/system';
// import {ThemeTypings} from './generated-theme.types';
import {Colors} from './foundations/colors/colors.types';
import {Fonts} from './foundations/typography/typography.types';
import {Button} from '../components/button/button.theme';
import {Text} from '../components/text/';
import {Card, CardHeader} from '../components/card/card.theme';

interface ThemeConfig extends ColorModeOptions {
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
  components: {
    ...components,
    Button,
    Text,
    Card,
    CardHeader,
  },
  config,
};

interface Theme extends Omit<ThemeTypings, 'colors' | 'fonts'>, Fonts {
  colors: Colors;
}

export const theme = extendTheme(overrides) as Theme;
