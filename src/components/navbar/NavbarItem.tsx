import React, { ReactNode, useState } from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import * as styles from '../../styles/Navbar.module.css';
// @ts-ignore
import * as dashboardStyles from '../../styles/Dashboard.module.css';

interface Props {
  url: string;
  text: string;
  children?: ReactNode;
  className?: string;
}

const NavbarItem = ({ url, text, children, className = styles.navLinkItem }: Props) => {
  let isDashboard = false;
  if (className === dashboardStyles.navLinkItem) isDashboard = true;
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(isDashboard);
  // const timeout = 500;

  const handleOnMouseEnter = () => {
    if (className === dashboardStyles.navLinkItem) return;
    else setShowDropdownMenu(true);
  };

  const handleOnMouseLeave = () => {
    // setTimeout(() => {
    //     setOpen(false)
    // }, timeout)
    if (className === dashboardStyles.navLinkItem) return;
    else setShowDropdownMenu(false);
  };

  const onClickHandler = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <>
      <li
        className={className}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={onClickHandler}>
        <Link to={url}>
          {text}
          {/*{children}*/}
          {showDropdownMenu && children}
        </Link>
      </li>
    </>
  );
};

export default NavbarItem;
