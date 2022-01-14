import {extendTheme, ThemeTypings} from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';
import styles from './styles';
import type {ColorModeOptions} from '@chakra-ui/system';
import {Fonts} from './foundations/typography/typography.types';
import {Button} from '../components/button/button.theme';
import {Card, CardHeader} from '../components/card/card.theme';
import {Link} from '../components/link/link.theme';
import {Text} from '../components/text/text.theme';
import {ColorsProps} from './foundations/colors';
interface ThemeConfig extends ColorModeOptions {
  cssVarPrefix?: string;
}

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

const overrides = {
  ...foundations,
  styles,
  components: {
    ...components,
    Button,
    Card,
    CardHeader,
    Link,
    Text,
  },
  config,
};

interface Theme extends Omit<ThemeTypings, 'colors' | 'fonts'>, Fonts {
  colors: ColorsProps;
}

/*
Theme extended from Chakra-UI: https://chakra-ui.com/docs/theming/theme
*/
export const theme = extendTheme(overrides) as Theme;
