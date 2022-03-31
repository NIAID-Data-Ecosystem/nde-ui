import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Icon,
  Image,
  LinkProps,
  useBreakpointValue,
  TextProps,
} from '@chakra-ui/react';
import {FaChevronRight} from 'react-icons/fa';
import {Link} from '../../components/link';
import styled from '@emotion/styled';
import footerConfig from './footer.config.json';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';

// Styled links for footer section
export const StyledLink = styled(Link)<LinkProps>(() => ({}));

StyledLink.defaultProps = {
  display: 'inline',
  color: 'white',
  width: '100%',
  variant: 'ghost',
  my: 0,
  _visited: {color: 'white'},
  _hover: {color: 'white'},
};

interface FooterLinkProps {
  href: string;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  isExternal,
  href,
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
      <StyledLink href={href} isExternal={isExternal ?? false} variant='ghost'>
        {children}
      </StyledLink>
      {!isExternal && (
        <Icon
          as={FaChevronRight}
          boxSize={3}
          ml={2}
          color={'accent.bg'}
          transform={`translate(-5px)`}
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
      as={'h2'}
      size={'h5'}
      fontFamily={'body'}
      color={'white'}
      fontWeight={'medium'}
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
  navigation?: FooterItem[];
  contact?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({navigation, contact}) => {
  const navigationSections = navigation
    ? ([...navigation, ...footerConfig.routes] as FooterItem[])
    : (footerConfig.routes as FooterItem[]);

  const isMobile = useBreakpointValue({base: true, md: false});

  return (
    <Box
      as={'footer'}
      bg={'gray.900'}
      color={'white'}
      borderTop={'0.25rem solid'}
      borderColor={'accent.bg'}
    >
      <Stack maxW={'6xl'} p={8}>
        <SimpleGrid minChildWidth={'300px'} spacing={6}>
          {navigationSections.map((section, i) => {
            return (
              <Box key={i} flex={i === 0 ? 2 : 1}>
                {section.label && <ListHeader>{section.label}</ListHeader>}
                {section.routes &&
                  section.routes.map(({href, label, routes, isExternal}) => {
                    return (
                      <Box key={label} align={'flex-start'} mb={1}>
                        {href ? (
                          <FooterLink
                            href={href}
                            isExternal={isExternal ?? false}
                          >
                            {label}
                          </FooterLink>
                        ) : (
                          <>
                            <ListHeader
                              as={'h3'}
                              size={'sm'}
                              mb={0}
                              color={'whiteAlpha.800'}
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
        borderStyle={'solid'}
        bg={'text.heading'}
        borderColor={'gray.700'}
      >
        <Container
          // as={Stack}
          maxW={'unset'}
          py={4}
          direction={{base: 'column', md: 'row'}}
          spacing={4}
          justify={{md: 'space-between'}}
          align={{md: 'center'}}
        >
          <Box flex={1} maxW={'300px'}>
            <Image
              src={isMobile ? MobileLogo : DesktopLogo}
              alt={'NIAID data ecosystem logo'}
            ></Image>
          </Box>
          {contact}
        </Container>
      </Box>
    </Box>
  );
};
