import React from 'react';
import {Image} from '@chakra-ui/react';
import ndeVerticalMobile from '../../assets/logos/nde/nde-logo_mobile-vertical--white.svg';
import ndeMobile from '../../assets/logos/nde/nde-logo_mobile-preferred--white.svg';
import ndeDesktop from '../../assets/logos/nde/nde-logo_desktop--white.svg';
import niaidVerticalMobile from '../../assets/logos/niaid/niaid-logo_mobile-vertical--white.svg';
import niaidMobile from '../../assets/logos/niaid/niaid-logo_mobile-preferred--white.svg';
import niaidDesktop from '../../assets/logos/niaid/niaid-logo_desktop--white.svg';

export const NIAIDLogo = () => {
  return (
    <>
      {/* Mobile Logo : up to small screen size  */}
      <Image
        display={{base: 'block', sm: 'none'}}
        minWidth='130px'
        h='36px'
        minH='36px'
        src={niaidVerticalMobile}
        alt='national institute of allergies and infectious diseases logo'
      />

      {/* Tablet Logo : from small to large screen size  */}
      <Image
        display={{base: 'none', sm: 'block', lg: 'none'}}
        minWidth='330px'
        h='28px'
        minH='28px'
        src={niaidMobile}
        alt='national institute of allergies and infectious diseases logo'
      />

      {/* Desktop Logo : from large screen size */}
      <Image
        display={{base: 'none', lg: 'block'}}
        minWidth='530px'
        h='40px'
        minH='40px'
        src={niaidDesktop}
        alt='national institute of allergies and infectious diseases logo'
      />
    </>
  );
};

export const NDELogo = () => {
  return (
    <>
      {/* Mobile Logo : up to small screen size  */}
      <Image
        display={{base: 'block', sm: 'none'}}
        minWidth='130px'
        h='19px'
        minH='19px'
        src={ndeVerticalMobile}
        alt='NIAID Data Ecosystem logo'
      />

      {/* Tablet Logo : from small to large screen size  */}
      <Image
        display={{base: 'none', sm: 'block', lg: 'none'}}
        minWidth='330px'
        h='28px'
        minH='28px'
        src={ndeMobile}
        alt='NIAID Data Ecosystem logo'
      />

      {/* Desktop Logo : from large screen size */}
      <Image
        display={{base: 'none', lg: 'block'}}
        minWidth='530px'
        h='40px'
        minH='40px'
        src={ndeDesktop}
        alt='NIAID Data Ecosystem logo'
      />
    </>
  );
};
