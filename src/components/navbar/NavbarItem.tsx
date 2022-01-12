import React, { ReactNode, useState } from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';

interface Props {
  url: string;
  text: string;
  children?: ReactNode;
  className?: string;
}

const NavbarItem = ({ url, text, children, className }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  // const timeout = 500;

  const openDropdownMenu = () => {
    setOpen(true);
  };

  const closeDropdownMenu = () => {
    // setTimeout(() => {
    //     setOpen(false)
    // }, timeout)
    setOpen(false);
  };

  return (
    <li
      className={styles.navLinkItem || className}
      onMouseEnter={openDropdownMenu}
      onMouseLeave={closeDropdownMenu}
    >
      <Link to={url}>
        {text}
        {/*{children}*/}
        {open && children}
      </Link>
    </li>
  );
};

export default NavbarItem;
