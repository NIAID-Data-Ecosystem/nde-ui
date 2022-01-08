export interface Fonts {
  fonts: {
    heading: string;
    body: string;
  };
}

export interface Typography extends Fonts {
  fontSizes: {
    xs: string;
    sm: string;
  };
  lineHeights: {base: number; short: number};
}
