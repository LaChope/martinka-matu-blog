import React, { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface Props {
  children: ReactNode;
  url: string;
  pageTitle: string;
}

const Layout = ({ url, children, pageTitle }: Props) => {
  return (
    <>
      {url === '/' ? <Navbar className={'dashboard'} /> : <Navbar />}
      {children}
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
