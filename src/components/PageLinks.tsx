import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

interface Props {
  itemClassName?: string;
  itemsClassName?: string;
}

const PageLinks = ({
  itemsClassName = 'nav-link-items',
  itemClassName = 'nav-link-item'
}: Props) => {
  const links: Array<any> = [
    {
      id: 1,
      text: 'home',
      url: '/'
    },
    {
      id: 2,
      text: 'blog',
      url: '/blog'
    },
    {
      id: 3,
      text: 'about',
      url: '/about'
    }
  ];

  const templateLinks = () => {
    return (
      <ul className={itemsClassName}>
        <Logo />
        {links.map((link): any => (
          <li key={link.id} className={itemClassName}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return templateLinks();
};

export default PageLinks;
