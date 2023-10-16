import {extendTheme, ThemeTypings} from '@chakra-ui/react';
import foundations from './foundations';
import styles from './styles';
import {Fonts} from './foundations/typography/typography.types';
import {Button} from '../components/button/button.theme';
import {Badge} from '../components/badge/badge.theme';
import Card from '../components/card/card.theme';
import {Heading} from '../components/heading/heading.theme';
import {Input} from '../components/input/input.theme';
import {Link} from '../components/link/link.theme';
import {Table} from '../components/table/table.theme';
import {Tag} from '../components/tag/tag.theme';
import {Text} from '../components/text/text.theme';
import {ColorsProps} from './foundations/colors';

interface ThemeConfig {
  cssVarPrefix?: string;
}

const config: ThemeConfig = {
  cssVarPrefix: 'chakra',
};

// Overrides to Chakra-UI theme object
const overrides = {
  ...foundations,
  styles,
  components: {
    Badge,
    Button,
    Card,
    Heading,
    Input,
    Link,
    Table,
    Tag,
    Text,
  },
  config,
};

export interface Theme extends Omit<ThemeTypings, 'colors' | 'fonts'>, Fonts {
  colors: ColorsProps;
}

/*
Theme extended from Chakra-UI: https://chakra-ui.com/docs/theming/theme
*/
export const themeOverrides = overrides;
export const theme = extendTheme(overrides) as Theme;
