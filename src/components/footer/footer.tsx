import React from 'react';
import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Heading,
  Icon,
  Image,
  useBreakpointValue,
  TextProps,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaLinkedin,
  FaChevronRight,
  FaRegEnvelope,
} from 'react-icons/fa';
import styled from '@emotion/styled';
import {Link, LinkProps} from '../../components/link';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';
import footerConfig from './footer.config.json';
import {SocialButton} from '../button';
import {IconType} from 'react-icons/lib';

// Styled links for footer section
export const StyledLink = styled(Link)<LinkProps>(() => ({}));

StyledLink.defaultProps = {
  display: 'inline',
  my: 0,
  color: 'white',
  _visited: {color: 'white'},
  _hover: {color: 'white'},
};

interface FooterLinkProps extends LinkProps {
  href: string;
  isExternal?: boolean;
}

// Links in footer.
const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  isExternal,
  href,
  ...props
}) => {
  // Icon for local links.
  return (
    <Box
      _hover={{
        svg: {
          opacity: '100%',
          transform: 'translateX(0)',
          transition: 'all .3s ease',
        },
      }}
    >
      <StyledLink href={href} isExternal={isExternal ?? false} {...props}>
        {children}
      </StyledLink>
      {!isExternal && (
        <Icon
          as={FaChevronRight}
          boxSize={3}
          ml={2}
          color='accent.bg'
          transform='translate(-5px)'
          transition='all .3s ease'
        ></Icon>
      )}
    </Box>
  );
};

// Header for footer section
export interface ListHeaderProps extends TextProps {}
const ListHeader: React.FC<ListHeaderProps> = ({children, ...props}) => {
  return (
    <Heading
      as='h2'
      size='h5'
      fontFamily='body'
      color='white'
      fontWeight='medium'
      {...props}
    >
      {children}
    </Heading>
  );
};

export interface FooterItem {
  label: string;
  type?: string;
  routes?: FooterItem[];
  href?: string;
  subLabel?: string;
  isExternal?: boolean;
}

// Contact Links such as social media, email etc.
const ContactUs = () => {
  interface FooterConfig {
    routes: FooterItem[];
    contact: FooterItem;
  }

  const {contact} = footerConfig as FooterConfig;

  const SocialComponent = ({route}: {route: FooterItem}) => {
    const {label, href} = route;
    if (!href) {
      return <></>;
    }
    let icon: IconType | undefined;
    let bg = 'primary.500';

    if (label.toLowerCase().includes('twitter')) {
      icon = FaTwitter;
      bg = 'twitter.500';
    }
    if (label.toLowerCase().includes('linkedin')) {
      icon = FaLinkedin;
      bg = 'linkedin.500';
    }
    return (
      <SocialButton label={label} href={href} bg={`${bg}`}>
        <Icon as={icon} boxSize={4} />
      </SocialButton>
    );
  };

  if (!contact) {
    return null;
  }

  return (
    <Flex
      direction={['column', 'column', 'row']}
      justifyContent='space-between'
      pt={{base: 4, sm: 4}}
    >
      {/* Contact Links */}
      <Flex
        direction={['column', 'row']}
        flexWrap='wrap'
        alignItems={['start', 'center']}
      >
        {/* {contact.label && (
          <Text color={'white'} my={1} mr={4}>
            {contact.label}
          </Text>
        )} */}
        {contact.routes &&
          contact.routes
            .filter(r => r.type === 'email' || r.type === 'contact')
            .map(route => {
              if (!route.href) {
                return;
              }
              const {label, type, href} = route;
              return (
                <Flex key={label} alignItems='center' m={1}>
                  <StyledLink href={href} fontSize='sm' w='unset'>
                    {label}
                  </StyledLink>
                  {type?.toLowerCase().includes('email') && (
                    <Icon as={FaRegEnvelope} boxSize={3} mx={2}></Icon>
                  )}
                </Flex>
              );
            })}
      </Flex>

      {/* Social Links */}
      <Flex direction='row' flexWrap='wrap' mt={[2, 0]}>
        {contact.routes &&
          contact.routes
            .filter(r => r.type === 'social')
            .map(route => {
              if (!route.href) {
                return;
              }
              return (
                <Box key={route.label} m={1}>
                  <SocialComponent route={route} />
                </Box>
              );
            })}
      </Flex>
    </Flex>
  );
};

export interface FooterProps {
  navigation?: FooterItem[];
}

export const Footer: React.FC<FooterProps> = ({navigation}) => {
  const navigationSections = navigation
    ? ([...navigation, ...footerConfig.routes] as FooterItem[])
    : (footerConfig.routes as FooterItem[]);

  const isMobile = useBreakpointValue({base: true, md: false});

  return (
    <Box
      as='footer'
      bg='gray.900'
      color='white'
      borderTop='0.25rem solid'
      borderColor='accent.bg'
      minW='300px'
    >
      <Stack maxW='6xl' p={{base: 4, sm: 8}}>
        <SimpleGrid minChildWidth='300px' spacing={6}>
          {navigationSections.map((section, i) => {
            return (
              <Box key={i} flex={i === 0 ? 2 : 1}>
                {section.label && <ListHeader>{section.label}</ListHeader>}
                {section.routes &&
                  section.routes.map(({href, label, routes, isExternal}) => {
                    return (
                      <Box key={label} align='flex-start' mb={1}>
                        {href ? (
                          <FooterLink
                            href={href}
                            isExternal={isExternal ?? false}
                            variant='ghost'
                          >
                            {label}
                          </FooterLink>
                        ) : (
                          <>
                            <ListHeader
                              as='h3'
                              size='sm'
                              mb={0}
                              color='whiteAlpha.800'
                            >
                              {label}
                            </ListHeader>
                            {routes &&
                              routes.map(route => (
                                <Box key={route.label}>
                                  {route.href && (
                                    <FooterLink
                                      href={route.href}
                                      isExternal={route.isExternal ?? false}
                                      variant='ghost'
                                    >
                                      {route.label}
                                    </FooterLink>
                                  )}
                                </Box>
                              ))}
                          </>
                        )}
                      </Box>
                    );
                  })}
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
      <Box
        borderTopWidth={1}
        borderStyle='solid'
        bg='text.heading'
        borderColor='gray.700'
      >
        <Container
          // as={Stack}
          maxW='unset'
          px={{base: 4, sm: 8}}
          py={{base: 6, sm: 8}}
          direction={{base: 'column', md: 'row'}}
          spacing={4}
          justify={{md: 'space-between'}}
          align={{md: 'center'}}
        >
          <Box flex={1} maxW={{base: '300px', sm: '400px'}}>
            <Image
              src={isMobile ? MobileLogo : DesktopLogo}
              alt={'NIAID data ecosystem logo'}
            ></Image>
          </Box>
          <ContactUs />
        </Container>
      </Box>
    </Box>
  );
};
