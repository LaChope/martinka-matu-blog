import React, { ReactNode } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

import '../styles/global.css';

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
