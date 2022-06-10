import { Box, BoxProps, Container, MantineNumberSize, MantineProvider } from '@mantine/core';
import { BoxSx } from '@mantine/core/lib/components/Box/use-sx/use-sx';
import SectionHead from 'components/SectionHead';
import React, { FC, ReactNode } from 'react';

export interface SectionProps extends BoxProps<'div'> {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'white' | 'light' | 'pattern';
  fullWidth?: boolean;
  width?: MantineNumberSize;
}

const boxSX: Record<SectionProps['background'], BoxSx> = {
  white: {},
  light: (theme) => ({
    backgroundColor: theme.colors.gray[1],
    border: `1px solid ${theme.colors.gray[3]}`,
  }),
  pattern: {
    background: `url(${require('../../images/backgrounds/light-triangles-large.svg').default})`,
    backgroundSize: 'cover',
  },
};

const defaultProps: Record<SectionProps['background'], Record<string, Record<string, any>>> = {
  white: {},
  light: {},
  pattern: {},
};

const Section: FC<SectionProps> = (props) => {
  const { title, subtitle, children, fullWidth, background = 'white', width, ...rest } = props;

  const contents = (
    <>
      {title && <SectionHead title={title}>{subtitle}</SectionHead>}
      {children}
    </>
  );

  return (
    <Box sx={boxSX[background]} py={75} {...rest}>
      <MantineProvider defaultProps={defaultProps[background]}>
        {fullWidth ? contents : <Container size={width}>{contents}</Container>}
      </MantineProvider>
    </Box>
  );
};

export default Section;
