:warning: Deprecation Notice

As of February 2024, the NDE UI design system is officially deprecated. 
Why is it being deprecated?
The NDE UI design system is exclusively used within the NIAID Data Ecosystem Portal. For this reason, there is no strong need for a separate package, choosing instead the simplicity of maintaining all UI related components in the [NDE Portal repository](https://github.com/NIAID-Data-Ecosystem/nde-portal).

What does this mean?
No New Features: The project will no longer receive updates or new features.
Limited Support: We will offer limited support, mainly focusing on critical bug fixes and security updates, until February 2024.

Questions and Support
For any questions or support regarding the deprecation, please open an issue on our GitHub repository.


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
