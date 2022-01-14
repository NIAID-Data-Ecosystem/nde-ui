import {theme} from '../src/theme/index';

// props to filter out from story docs
export const excludedChakraProps = [
  '__css',
  'orientation',
  'styleConfig',
  'sx',
  'css',
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    exclude: ['__css', 'orientation', 'styleConfig', 'sx', 'css'],
    expanded: true, // sets docs in controls panel.
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme, // apply custom chakra theme.
  },
  options: {
    storySort: {
      // '*' represents all other stories
      order: ['Foundations', 'Components', '*'],
    },
  },
};
