import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Icon,
  Image,
  useBreakpointValue,
  TextProps,
} from '@chakra-ui/react';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Link, LinkProps} from '@chakra-ui/react';
import styled from '@emotion/styled';
import footerConfig from './footer.config.json';

// Styled links for footer section
export const StyledLink = styled(Link)<LinkProps>(() => ({}));

StyledLink.defaultProps = {
  display: 'inline',
  color: 'whiteAlpha.800',
  width: '100%',
  _visited: {color: 'white'},
  _hover: {color: 'white'},
};

// Header for footer section
interface ListHeaderProps extends TextProps {}
const ListHeader: React.FC<ListHeaderProps> = ({children, ...props}) => {
  return (
    <Heading
      as={'h5'}
      size={'h6'}
      mb={2}
      fontFamily={'body'}
      color={'white'}
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
    <Box bg={'gray.900'} color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={8}>
          {navigationSections.length < 3 ? (
            <Stack align={'flex-start'}></Stack>
          ) : null}
          {navigationSections.map((section, i) => {
            return (
              <Stack key={i} align={'flex-start'}>
                {section.label && <ListHeader>{section.label}</ListHeader>}
                {section.routes &&
                  section.routes.map(({href, label, routes, isExternal}) => {
                    return (
                      <Stack key={label} align={'flex-start'}>
                        {href ? (
                          <StyledLink
                            href={href}
                            isExternal={isExternal ?? false}
                          >
                            {label}
                            {isExternal && (
                              <Icon as={FaExternalLinkAlt} boxSize={3} ml={2} />
                            )}
                          </StyledLink>
                        ) : (
                          <>
                            <ListHeader
                              as={'h6'}
                              size={'sm'}
                              mb={0}
                              fontWeight='semibold'
                            >
                              {label}
                            </ListHeader>
                            {routes &&
                              routes.map(route => (
                                <Box key={route.label}>
                                  <StyledLink
                                    href={route.href}
                                    isExternal={route.isExternal ?? false}
                                  >
                                    {route.label}
                                    {route.isExternal && (
                                      <Icon
                                        as={FaExternalLinkAlt}
                                        boxSize={3}
                                        ml={2}
                                      />
                                    )}
                                  </StyledLink>
                                </Box>
                              ))}
                          </>
                        )}
                      </Stack>
                    );
                  })}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>

      {contact && (
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          bg={'text.heading'}
          borderColor={'gray.700'}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{base: 'column', md: 'row'}}
            spacing={4}
            justify={{md: 'space-between'}}
            align={{md: 'center'}}
          >
            <Box flex={1} maxW={'300px'}>
              <Image
                src={
                  isMobile
                    ? '/assets/logos/nde-logo-acronym-white.svg'
                    : '/assets/logos/nde-logo-white.svg'
                }
                alt={'Niaid data ecosystem logo'}
              ></Image>
            </Box>
            {contact}
          </Container>
        </Box>
      )}
    </Box>
  );
};
