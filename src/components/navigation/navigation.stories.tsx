import React from 'react';
import {
  Navigation as NavigationBar,
  MobileNavItem,
  DesktopNavItem,
} from './navigation';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {theme} from 'src/theme';
import navItems from './navigation.config.json';

export default {
  title: 'Components/Navigation',
  component: NavigationBar,
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = args => (
  <NavigationBar {...args} />
);

export const NavigationBarNoLinks = Template.bind({});

/* Navigation Bar Story  */
export const DefaultNavigation = Template.bind({});
DefaultNavigation.args = {
  navItems: navItems.routes,
  bg: 'primary.500',
};
DefaultNavigation.argTypes = {
  navItems: {
    description: `
    An array of navItem objects where:
    navItem = {
      label: string,
      href: string
      subLabel?: string,
      isExternal?:boolean,
      routes?: NavItem[],
    }
    `,
    table: {
      type: {
        summary: 'Array<NavItem>',
      },
    },
  },
  bg: {
    description: 'Background color for navigation bar.',
    defaultValue: theme.colors.primary['500'],
    control: {
      type: 'color',
    },
    table: {
      defaultValue: {summary: 'primary.500'},
      type: {summary: 'string'},
    },
  },
};

const NavigationItemArgTypes = {
  label: {
    description: 'Text description of link',
    table: {
      type: {summary: 'string'},
    },
  },
  href: {
    description: 'Link url',
    table: {
      type: {summary: 'string'},
    },
  },
};

/* Mobile Navigation Item Story  */
export const MobileNavigationItem: ComponentStory<typeof MobileNavItem> =
  args => <MobileNavItem {...args}></MobileNavItem>;
MobileNavigationItem.args = {
  label: 'Link Name',
  href: '#',
};
MobileNavigationItem.argTypes = {
  ...NavigationItemArgTypes,
};

/* Desktop Navigation Item Story  */
export const DesktopNavigationItem: ComponentStory<typeof DesktopNavItem> =
  args => <DesktopNavItem {...args}></DesktopNavItem>;

DesktopNavigationItem.args = {
  label: 'Link Name',
  href: '#',
};

DesktopNavigationItem.argTypes = NavigationItemArgTypes;

DesktopNavigationItem.parameters = {
  label: 'Link Name',
  href: '#',
  backgrounds: {
    default: 'gray',
    values: [{name: 'gray', value: '#132015'}],
  },
};
