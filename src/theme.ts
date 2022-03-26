import { MantineThemeOverride } from '@mantine/core';
require('./fonts/roboto-slab.ttf');

const theme: MantineThemeOverride = {
  headings: {
    fontFamily: '"Roboto Slab", sans-serif',
  },
  colors: {
    navy: [
      '#EBF2FA',
      '#C6DBF0',
      '#A2C4E7',
      '#7EADDD',
      '#5996D3',
      '#357FCA',
      '#2A66A2',
      '#204C79',
      '#153351',
      '#0B1928',
    ],
  },
  primaryColor: 'navy',
};

export default theme;
