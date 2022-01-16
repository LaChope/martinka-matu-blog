import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import DropdownItem from './DropdownItem';
import Slideshow from '../SlideShow';

interface Props {
  className?: string;
  children?: ReactNode;
  isDashboard?: boolean;
  dropdownItems: any;
}

const DropdownMenu = ({ className, isDashboard = false, dropdownItems }: Props) => {
  let dropdownClassName = navbarStyles;
  if (className === dashboardStyles) dropdownClassName = dashboardStyles;

  return (
    <div className={dropdownClassName.dropdownWrapper}>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className={dropdownClassName.blur} />
        <Slideshow className="slideshow" numberOfItems={dropdownItems.length} isDashboard={isDashboard}>
          <ul className={dropdownClassName.dropdownItems}>
            <DropdownItem
              items={dropdownItems}
              className={dropdownClassName.dropdownItem}
              isDashboard={isDashboard}
            />
          </ul>
        </Slideshow>
      </motion.span>
    </div>
  );
};

export default DropdownMenu;
