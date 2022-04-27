import { MantineProvider } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import theme from 'theme';
import FooterLinks from './Footer';
import HeaderNav from './Header';

const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <HeaderNav />
      {props.children}
      <FooterLinks />
    </MantineProvider>
  );
};

export default Layout;
