import React from 'react';
import {Image} from '@chakra-ui/react';
import VerticalMobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-vertical--white.svg';
import MobileLogo from '../../assets/logos/niaid-data-ecosystem-logo_mobile-preferred--white.svg';
import DesktopLogo from '../../assets/logos/niaid-data-ecosystem-logo_desktop--white.svg';

export const Logo = () => {
  return (
    <>
      {/* Mobile Logo : up to small screen size  */}
      <Image
        display={{base: 'block', sm: 'none'}}
        minWidth='130px'
        h='56px'
        minH='56px'
        src={VerticalMobileLogo}
        alt='NIAID Data Ecosystem logo'
      />

      {/* Tablet Logo : from small to large screen size  */}
      <Image
        display={{base: 'none', sm: 'block', lg: 'none'}}
        minWidth='330px'
        h='28px'
        minH='28px'
        src={MobileLogo}
        alt='NIAID Data Ecosystem logo'
      />

      {/* Desktop Logo : from large screen size */}
      <Image
        display={{base: 'none', lg: 'block'}}
        minWidth='595px'
        h='40px'
        minH='40px'
        src={DesktopLogo}
        alt='NIAID Data Ecosystem logo'
      />
    </>
  );
};
