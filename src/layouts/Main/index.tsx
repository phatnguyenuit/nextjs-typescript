import React, { memo } from 'react';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

const pages = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/counter',
    title: 'Counter',
  },
];

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayoutComponent: React.FC<MainLayoutProps> = ({
  children,
}) => (
  <div>
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
  </div>
);

const MainLayout = memo(MainLayoutComponent);
MainLayout.displayName = 'MainLayout';

export default MainLayout;
