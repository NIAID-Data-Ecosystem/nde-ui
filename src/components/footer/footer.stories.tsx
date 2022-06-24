import React from 'react';
import {Footer} from './footer';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    contact: {
      description: '',
      table: {
        type: {summary: 'React.ReactNode'},
      },
    },
    navigation: {
      description: `
      An array of footer items where:
      FooterItem = {
        label: string;
        type?: string;
        routes?: FooterItem[];
        href?: string;
        subLabel?: string;
        isExternal?: boolean;
      }
      `,
      table: {
        type: {
          summary: 'Array<FooterItem>',
        },
      },
    },
  },
} as ComponentMeta<typeof Footer>;

const customRoutes = {
  href: 'https://data-staging.niaid.nih.gov/',
  contact: {
    label: 'Connect with us',
    routes: [
      {
        label: 'Help',
        href: 'mailto:NIAIDDataEcosystem@mail.nih.gov',
        type: 'email',
      },
      {
        label: 'Contact Us',
        href: 'https://www.niaid.nih.gov/global/contact-us',
        isExternal: true,
        type: 'contact',
      },
    ],
  },
  routes: [
    {
      label: 'NIAID Data Ecosystem',
      routes: [
        {
          label: 'Discovery Portal',
          routes: [
            {label: 'About', href: '/about'},

            {label: 'Getting Started', href: '/getting-started'},
            {
              label: 'Resources',
              routes: [
                {
                  label: 'F.A.Q',
                  subLabel: 'Frequently Asked Questions',
                  href: '/faq',
                },
                {
                  label: 'Schemas',
                  subLabel: 'Dataset and Computational Tool schemas',
                  href: '/schema',
                },
                {
                  label: 'Latest',
                  subLabel:
                    'Changelog for additions/subtractions/feature launches',
                  href: '/latest',
                },
              ],
            },
          ],
        },
        {
          label: 'Analysis Workspace',
          routes: [
            {
              label: 'Go to workspace',
              href: '/faq',
              isExternal: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Policies',
      routes: [
        {
          label: 'Accessibility',
          href: 'https://data-staging.niaid.nih.gov/accessibility',
          isExternal: true,
        },
        {
          label: 'Disclaimer',
          href: 'https://data-staging.niaid.nih.gov/disclaimer',
          isExternal: true,
        },
        {
          label: 'Privacy Policy',
          href: 'https://data-staging.niaid.nih.gov/privacy',
          isExternal: true,
        },
        {
          label: 'Freedom of Information Act (FOIA)',
          href: 'https://www.niaid.nih.gov/global/freedom-information-act',
          isExternal: true,
        },
        {
          label: 'Vulnerability Disclosure Policy',
          href: 'https://www.hhs.gov/vulnerability-disclosure-policy/index.html',
          isExternal: true,
        },
        {
          label: 'No Fear Act Data',
          href: 'https://www.niaid.nih.gov/global/no-fear-act-notice',
          isExternal: true,
        },
      ],
    },
    {
      label: 'Related Government Websites',
      routes: [
        {
          label: 'National Institute of Allergy and Infectious Diseases',
          href: 'https://www.niaid.nih.gov/',
          isExternal: true,
        },
        {
          label: 'National Institutes of Health',
          href: 'https://www.nih.gov/',
          isExternal: true,
        },
        {
          label: 'Health and Human Services',
          href: 'https://www.hhs.gov/',
          isExternal: true,
        },
        {
          label: 'USA.gov',
          href: 'https://www.usa.gov/',
          isExternal: true,
        },
        {
          label: 'USAGov en Español',
          href: 'https://www.usa.gov/espanol/',
          isExternal: true,
        },
      ],
    },
  ],
};

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

/* Default Footer Story  */
export const DefaultFooter = Template.bind({});

/* Default Footer Story with contact info  */
export const DefaultFooterWithContactUs = Template.bind({});
DefaultFooterWithContactUs.args = {};

/* Custom Footer Links  */
export const FooterWithPortalLinks = Template.bind({});
FooterWithPortalLinks.args = {
  navigation: customRoutes,
};

/* Custom Footer Links with contact info */
export const FooterWithPortalLinksAndWithContactUs = Template.bind({});
FooterWithPortalLinksAndWithContactUs.args = {
  navigation: customRoutes,
};
