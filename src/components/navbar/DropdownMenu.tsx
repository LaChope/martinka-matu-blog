import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import * as navbarStyles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';
import DropdownItem from './DropdownItem';
import SlideShow from '../SlideShow';

interface Props {
  className?: string;
  children?: ReactNode;
  isDashboard?: boolean;
  dropdownItems: any;
  dropdownMenuIteration: number;
}

const DropdownMenu = ({
  className,
  isDashboard = false,
  dropdownItems,
  dropdownMenuIteration
}: Props) => {
  let dropdownClassName = navbarStyles;
  if (className === dashboardStyles) dropdownClassName = dashboardStyles;
  const dropdownWrapperClassNameIteration =
    dropdownClassName['dropdownWrapper' + dropdownMenuIteration];

  return (
    <div className={`${dropdownClassName.dropdownWrapper} ${dropdownWrapperClassNameIteration}`}>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className={dropdownClassName.blur} />
        <SlideShow
          className="slideshow"
          numberOfItems={dropdownItems.length}
          isDashboard={isDashboard}
        >
          <ul className={dropdownClassName.dropdownItems}>
            <DropdownItem
              items={dropdownItems}
              className={dropdownClassName.dropdownItem}
              isDashboard={isDashboard}
            />
          </ul>
        </SlideShow>
      </motion.span>
    </div>
  );
};

export default DropdownMenu;
