import { MantineProvider } from '@mantine/core';
import React, { FC } from 'react';
import theme from 'theme';
import FooterLinks from './Footer';
import HeaderNav from './Header';

const Layout: FC = (props) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <HeaderNav />
      {props.children}
      <FooterLinks />
    </MantineProvider>
  );
};

export default Layout;
