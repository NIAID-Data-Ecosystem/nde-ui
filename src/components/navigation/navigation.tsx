import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Image,
  Icon,
  Link,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  PopoverBody,
} from '@chakra-ui/react';
import {FaCaretDown, FaChevronRight, FaChevronDown} from 'react-icons/fa';
import {IoClose, IoMenu} from 'react-icons/io5';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';

export interface RouteProps {
  label: string;
  subLabel?: string;
  routes?: Array<RouteProps>;
  href?: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  navItems?: Array<RouteProps>;
  bg: string;
}

// Mobile Navigation link styles
export const MobileNavItem = ({label, routes, href}: RouteProps) => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Stack
      w={'100%'}
      spacing={4}
      onClick={routes && onToggle}
      cursor={'pointer'}
    >
      <Flex
        p={2}
        as={href ? Link : Box}
        variant={'unstyled'}
        href={href || ''}
        justify={'space-between'}
        align={'center'}
        w={'100%'}
        color={href ? 'primary.600' : 'text.heading'}
        rounded={'md'}
        _hover={{
          bg: 'primary.50',
          color: href ? 'primary.500' : 'text.heading',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {href && (
          <Icon
            sx={{
              '> *': {color: 'gray.300'},
            }}
            w={3}
            h={3}
            as={FaChevronRight}
          />
        )}
        {routes && (
          <Icon
            as={FaChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={4}
            h={4}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={0}
          pl={2}
          ml={2}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {routes &&
            routes.map(route => {
              return <MobileNavItem key={route.href} {...route} />;
            })}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// Desktop Navigation link styles
export const DesktopNavItem = ({label, routes, href}: RouteProps) => {
  return (
    <Box bg={'inherit'}>
      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Flex
            as={routes ? Flex : Link}
            p={2}
            href={href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={'white'}
            _visited={{color: 'white'}}
            _hover={{
              opacity: 0.85,
              color: 'white',
            }}
            variant='unstyled'
            cursor={'pointer'}
            alignItems={'center'}
          >
            {label}
            {routes && <Icon as={FaCaretDown} w={4} h={4} />}
          </Flex>
        </PopoverTrigger>

        {routes && (
          <PopoverContent
            border={0}
            boxShadow={'xl'}
            bg={'white'}
            py={2}
            rounded={'xl'}
            minW={'sm'}
          >
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                {routes.map(route => (
                  <DesktopSubNav key={route.label} {...route} />
                ))}
              </Stack>
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

// Desktop Navigation sub menu for nested links
const DesktopSubNav = ({label, href, subLabel}: RouteProps) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      color={'primary.700'}
      textDecoration={'none'}
      rounded={'md'}
      _hover={{bg: 'primary.50'}}
      variant='unstyled'
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{color: 'primary.500'}}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text fontSize={'sm'} color={'text.body'}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon
            sx={{
              '> *': {color: 'primary.500'},
            }}
            w={3}
            h={3}
            as={FaChevronRight}
          />
        </Flex>
      </Stack>
    </Link>
  );
};

export const Navigation: React.FC<NavigationProps> = ({bg, navItems}) => {
  const {isOpen, onToggle} = useDisclosure();
  const isMobile = useBreakpointValue({base: true, md: false});

  return (
    <Box as={'nav'} aria-label={'Main navigation'} w={'100%'}>
      <Flex
        bg={bg || 'primary.500'}
        color={'white'}
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
      >
        <Flex
          flex={{base: 1, md: 'auto'}}
          ml={{base: -2}}
          alignItems={'center'}
        >
          <Flex flex={{base: 1}} justify={'start'}>
            <Link
              display='flex'
              alignItems='center'
              href='/landing'
              variant={'unstyled'}
            >
              <Image
                w={['220px', '220px', '350px']}
                h={'auto'}
                src={isMobile ? MobileLogo : DesktopLogo}
                alt={'niaid logo'}
              />
            </Link>
            <Flex
              display={{base: 'none', md: 'flex'}}
              ml={10}
              flex={1}
              justifyContent={'flex-end'}
            >
              <Stack direction={'row'} spacing={4}>
                {navItems &&
                  navItems.map(navItem => (
                    <DesktopNavItem key={navItem.label} {...navItem} />
                  ))}
              </Stack>
            </Flex>
          </Flex>
          {navItems && (
            <IconButton
              onClick={onToggle}
              color={'white'}
              display={{base: 'flex', md: 'none'}}
              _hover={{bg: 'whiteAlpha.500'}}
              icon={
                isOpen ? (
                  <Icon as={IoClose} w={5} h={5} />
                ) : (
                  <Icon as={IoMenu} w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          )}
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg={'white'} p={2} display={{md: 'none'}} alignItems={'end'}>
          {navItems &&
            navItems.map(navItem => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
      </Collapse>
    </Box>
  );
};
