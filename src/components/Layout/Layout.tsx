import { MantineProvider } from '@mantine/core';
import { globalStyles } from 'globalStyles';
import React, { FC, ReactNode } from 'react';
import theme from 'theme';
import FooterLinks from './Footer';
import HeaderNav from './Header';
import 'animate.css/animate.min.css';

const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme} styles={globalStyles}>
      <HeaderNav />
      {props.children}
      <FooterLinks />
    </MantineProvider>
  );
};

export default Layout;
