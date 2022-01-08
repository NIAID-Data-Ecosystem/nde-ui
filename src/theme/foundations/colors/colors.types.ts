import {ColorHues} from '@chakra-ui/react';

export interface Colors {
  primary: ColorHues;
  secondary: ColorHues;
  gray: ColorHues;
  accent: {bg: string};
  niaid: {
    placeholder: string;
    color: string;
  };
  page: {bg: string; alt: string};
  navigation: {bg: string; hover: string};
  text: {
    body: string;
    heading: string;
  };
  link: {
    color: string;
    visited: string;
  };
  status: {
    success: string;
    alert: string;
    warning: string;
    error: string;
    info: string;
  };
  socials: {
    ig: string;
  };
}
