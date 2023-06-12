import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  Icon,
  ListItem,
  ListProps,
  SimpleGrid,
  Stack,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react';
import {FaChevronRight, FaGithub, FaRegEnvelope} from 'react-icons/fa';
import styled from '@emotion/styled';
import {Link, LinkProps} from '../../components/link';
import {Logo} from '../logo';

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
      mt={1}
      mb={3}
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

export interface FooterProps {
  navigation: {
    href: string;
    contact: FooterItem;
    routes: FooterItem[];
    lastUpdate?: FooterItem[];
  };
}

// Contact Links such as social media, email etc.
const FooterBottom = ({
  routes,
}: {
  routes:
    | FooterProps['navigation']['contact']['routes']
    | FooterProps['navigation']['lastUpdate'];
}) => {
  if (!routes) {
    return null;
  }

  return (
    <>
      {routes &&
        routes.map(route => {
          if (!route.href) {
            return;
          }
          const {label, type, href, isExternal} = route;
          return (
            <Flex
              key={label}
              alignItems='center'
              justifyContent='inherit'
              px={4}
              mt={{base: 1, md: 0}}
              mb={{base: 3, md: 0}}
            >
              {type?.toLowerCase().includes('email') && (
                <Icon as={FaRegEnvelope} boxSize={4} mx={2} />
              )}
              {type?.toLowerCase().includes('github') && (
                <Icon as={FaGithub} boxSize={4} mx={2} />
              )}
              <StyledLink
                href={href}
                fontSize='sm'
                w='unset'
                isExternal={isExternal}
                whiteSpace='nowrap'
              >
                {label}
              </StyledLink>
            </Flex>
          );
        })}
    </>
  );
};

export const Footer: React.FC<FooterProps> = ({navigation}) => {
  const navigationSections = navigation?.routes;

  interface SubList {
    label: string;
    routes?: FooterItem[];
    listProps?: ListProps;
    headingProps?: HeadingProps;
  }
  const SubList: React.FC<SubList> = ({
    label,
    routes,
    listProps,
    headingProps,
  }) => {
    return (
      <>
        <ListHeader
          as='h3'
          size='md'
          mb={3}
          color='whiteAlpha.800'
          {...headingProps}
        >
          {label}
        </ListHeader>
        <UnorderedList ml={0} {...listProps}>
          {routes &&
            routes.map(route => {
              if (route.routes) {
                return (
                  <SubList
                    key={route.label}
                    label={route.label}
                    routes={route.routes}
                    headingProps={{
                      as: 'h4',
                      size: 'sm',
                    }}
                  />
                );
              }
              return (
                <ListItem key={route.label}>
                  {route.href && (
                    <FooterLink
                      href={route.href}
                      isExternal={route.isExternal ?? false}
                      variant='ghost'
                    >
                      {route.label}
                    </FooterLink>
                  )}
                </ListItem>
              );
            })}
        </UnorderedList>
      </>
    );
  };
  return (
    <Box
      as='footer'
      bg='gray.900'
      color='white'
      borderTop='0.25rem solid'
      borderColor='accent.bg'
      minW='300px'
      display={['block', 'block', 'block', 'flex']}
      flexDirection='column'
    >
      <Stack p={8} alignItems={['center', 'center', 'start']} margin={'0 auto'}>
        <Box w='100%'>
          <Logo href={navigation?.href} />
          <SimpleGrid
            minChildWidth={{
              base: '100%',
              md: `${100 / (navigationSections?.length || 1)}%`,
              xl: `${1000 / (navigationSections?.length || 1)}px`,
            }}
            maxW='6xl'
            w='100%'
          >
            {navigationSections?.map((section, i) => {
              return (
                <Box key={i} flex={i === 0 ? 2 : 1}>
                  {section.label && (
                    <ListHeader mt={8}>{section.label}</ListHeader>
                  )}
                  <UnorderedList ml={0} my={4}>
                    {section.routes &&
                      section.routes.map(
                        ({href, label, routes, isExternal}) => {
                          return (
                            <ListItem key={label} alignItems='flex-start'>
                              {href ? (
                                <FooterLink
                                  href={href}
                                  isExternal={isExternal ?? false}
                                  variant='ghost'
                                >
                                  {label}
                                </FooterLink>
                              ) : (
                                <SubList label={label} routes={routes} />
                              )}
                            </ListItem>
                          );
                        },
                      )}
                  </UnorderedList>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Stack>
      <Box
        borderTopWidth={1}
        borderStyle='solid'
        bg='text.heading'
        borderColor='gray.700'
      >
        <Flex
          px={{base: 0, sm: 4}}
          py={{base: 2, sm: 4}}
          flexDirection={{base: 'row', md: 'row'}}
          flexWrap='wrap'
        >
          <Flex
            flexDirection={{base: 'column', lg: 'row'}}
            flexWrap='wrap'
            flex={1}
          >
            {navigation && navigation.contact && (
              <FooterBottom routes={navigation.contact.routes} />
            )}
          </Flex>
          <Flex
            flexDirection={{base: 'column', lg: 'row'}}
            flexWrap='wrap'
            flex={1}
            justifyContent={{base: 'flex-start', md: 'flex-end'}}
          >
            {navigation && navigation?.lastUpdate && (
              <FooterBottom routes={navigation.lastUpdate} />
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
