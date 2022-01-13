import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/all';
// @ts-ignore
import * as styles from '../styles/Navbar.module.css';

interface Props {
  logosClassName?: string;
  logoClassName?: string;
}

const SocialMedias = ({
  logosClassName = styles.navSocialMediaLogos,
  logoClassName = styles.navSocialMediaLogo
}: Props) => {
  const data: Array<any> = [
    {
      id: 1,
      text: 'Instagram',
      url: 'https://www.instagram.com/martinka.matu/'
    },
    {
      id: 2,
      text: 'Youtube',
      url: 'https://www.youtube.com/channel/UCd6uieungjUs03skmuLMMnw'
    }
  ];

  const getIcon = (text: string) => {
    if (text === 'Instagram') return <FaInstagram />;
    if (text === 'Youtube') return <FaYoutube />;
  };

  const templateMediaIcons = () => {
    return (
      <ul className={logosClassName}>
        {data.map((icon): any => (
          <li key={icon.id} className={logoClassName}>
            <a href={icon.url} target="_blank">
              {getIcon(icon.text)}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return templateMediaIcons();
};

export default SocialMedias;
