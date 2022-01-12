import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';

interface Props {
  children?: ReactNode;
}

const DropdownMenu = ({ children }: Props) => {
  return (
    <div className={styles.dropdownWrapper}>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className={styles.blur} />
        <ul className={styles.dropdownItems}>{children}</ul>
      </motion.span>
    </div>
  );
};

export default DropdownMenu;
