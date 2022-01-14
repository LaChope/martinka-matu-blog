import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import DropdownItem from './DropdownItem';

interface Props {
  className?: string;
  children?: ReactNode;
  showPictures?: boolean;
  dropdownItems: any;
}

const DropdownMenu = ({ className, showPictures = false, dropdownItems }: Props) => {
  let dropdownClassName = navbarStyles;
  if (className === dashboardStyles) dropdownClassName = dashboardStyles;

  return (
    <div className={dropdownClassName.dropdownWrapper}>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className={dropdownClassName.blur} />
        <ul className={dropdownClassName.dropdownItems}>
          <DropdownItem
            items={dropdownItems}
            className={dropdownClassName.dropdownItem}
            showPicture={showPictures}
          />
        </ul>
      </motion.span>
    </div>
  );
};

export default DropdownMenu;
