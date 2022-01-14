import React from 'react';
import {Footer, FooterItem} from './footer';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import footerConfig from './footer.config.json';
import {Box, Stack, Text, Icon} from '@chakra-ui/react';
import {FaTwitter, FaLinkedin} from 'react-icons/fa';
import {SocialButton} from '../button';

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

interface FooterConfig {
  routes: FooterItem[];
  contact: FooterItem;
}

const ContactUs = () => {
  const {contact} = footerConfig as FooterConfig;
  return (
    <Stack direction={'row'}>
      {contact.label && (
        <Text color={'white'} mr={2}>
          {contact.label}
        </Text>
      )}
      {contact.routes &&
        contact.routes.map(route => {
          if (!route.href || !route.type) {
            return;
          }
          const {type, label, href} = route;
          let icon;
          if (type === 'twitter') {
            icon = FaTwitter;
          }
          if (type === 'linkedin') {
            icon = FaLinkedin;
          }
          return (
            <Box key={label} mx={1}>
              <SocialButton label={label} href={href} bg={`${type}.500`}>
                <Icon as={icon} boxSize={4} />
              </SocialButton>
            </Box>
          );
        })}
    </Stack>
  );
};

const customRoutes = [
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
            subLabel: 'Changelog for additions/subtractions/feature launches',
            href: '/latest',
          },
        ],
      },
    ],
  },
];

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

/* Default Navigation Bar Story  */
export const DefaultFooter = Template.bind({});

/* Default Navigation Bar Story with contact info  */
export const DefaultFooterWithContactUs = Template.bind({});
DefaultFooterWithContactUs.args = {
  contact: <ContactUs />,
};

/* Custom Footer Links  */
export const FooterWithPortalLinks = Template.bind({});
FooterWithPortalLinks.args = {
  navigation: customRoutes,
};

/* Custom Footer Links with contact info */
export const FooterWithPortalLinksAndWithContactUs = Template.bind({});
FooterWithPortalLinksAndWithContactUs.args = {
  navigation: customRoutes,
  contact: <ContactUs />,
};
