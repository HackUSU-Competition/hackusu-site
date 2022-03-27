import { Title } from '@mantine/core';
import React, { FC } from 'react';

const PageTitle: FC = ({ children }) => {
  return <Title align="center">{children}</Title>;
};

export default PageTitle;
