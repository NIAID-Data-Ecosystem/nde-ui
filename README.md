## Add to project

```sh
yarn add nde-design-system
```

---

## Usage

- Components require a Theme Provider to apply the styles.

```jsx
import {ThemeProvider} from 'nde-ui';

<ThemeProvider>
  <FontFace />
  <App />
</ThemeProvider>;
```

- The NDE design system extends Chakra-UI functionality. Refer to their
  [docs](https://chakra-ui.com/) for more info.

## Storybook

To view all components available, clone the repo and run:

```sh
yarn install
yarn run storybook
```
