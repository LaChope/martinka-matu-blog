import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';

interface Props {
  children?: ReactNode;
  url: string;
  text?: string;
}

const DropdownItem = ({ children, url = '', text }: Props) => {
  return (
    <div className={styles.dropdownItem}>
      <Link to={url}>
        {text}
        {children}
      </Link>
    </div>
  );
};

export default DropdownItem;
