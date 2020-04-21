import React, { memo, FC } from 'react';
import NextLink from 'next/link';
import { Box } from '@material-ui/core';
import pages from 'constants/page';

export const MainLayoutComponent: FC = ({ children }) => (
  <Box px={3}>
    <p>Pages:</p>
    <ul>
      {pages.map((page) => (
        <li key={page.url}>
          <NextLink href={page.url}>
            <a>{page.title}</a>
          </NextLink>
        </li>
      ))}
    </ul>
    <main>{children}</main>
  </Box>
);

const MainLayout = memo(MainLayoutComponent) as typeof MainLayoutComponent &
  React.ComponentType<any>;
MainLayout.displayName = 'MainLayout';

export default MainLayout;
