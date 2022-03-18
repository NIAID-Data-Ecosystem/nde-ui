/*
NIAID styleguide colors
http://policy-prod-varnish-1734617591.us-east-1.elb.amazonaws.com/policies/color
*/

import {theme as ChakraTheme} from '@chakra-ui/react';
export type ColorsProps = typeof colors;

export const colors = {
  ...ChakraTheme.colors,
  primary: {
    50: '#f3fbfc',
    100: '#dbf2f6',
    200: '#c0e8ef',
    300: '#a2dde7',
    400: '#80d0de',
    500: '#157B8D',
    600: '#0F5764',
    700: '#0c4650',
    800: '#003b45',
    900: '#00151a',
  },
  secondary: {
    50: '#e8f7eb',
    100: '#cce3d0',
    200: '#aecfb4',
    300: '#90bc97',
    400: '#578f61',
    500: '#497951',
    600: '#345639',
    700: '#26402B',
    800: '#1b301f',
    900: '#132015',
  },
  gray: {
    50: '#FDFDFD',
    100: '#E8E8E8',
    200: '#D5D5D5',
    300: '#BFBFBF',
    400: '#ABABAB',
    500: '#969696',
    600: '#818181',
    700: '#6D6D6D',
    800: '#585858',
    900: '#444444',
  },
  niaid: {
    placeholder: '#9AA6B5',
    color: '#20558A',
  },
  page: {bg: '#FDFDFD', alt: '#F5F6FA'},
  text: {
    body: '#404B56',
    heading: '#2f2f2f',
  },
  navigation: {bg: '#262626', hover: '#1B1B1B'},
  accent: {bg: '#75C3AC'},
  link: {
    color: '#246CD3',
    visited: '#6F57B5',
  },
  status: {
    success: '#17805F',
    success_lt: '#F2F5F4',
    alert: '#F8FF55',
    warning: '#FFC10A',
    warning_lt: '#FFF9F2',
    error: '#D23342',
    error_lt: '#FBF2F3',
    info: '#4865E3',
    info_lt: '#F3F4FC',
  },

  socials: {
    ig: 'linear-gradient(45deg,#f6874f 0%,#cf4679 50%,#8c2f8f 100%)',
  },
};