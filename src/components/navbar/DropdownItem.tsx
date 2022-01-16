import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Card from '../Card';
import { motion } from 'framer-motion';

interface Props {
  children?: ReactNode;
  className?: string;
  items: any;
  isDashboard: boolean;
  picture?: IGatsbyImageData;
}

const DropdownItem = ({ items, className, isDashboard }: Props) => {
  const getAltImage = (item: any) => {
    if (item.frontmatter.hero_image_alt) {
      const altItem = item.frontmatter.hero_image_alt;
      return altItem.toString();
    }
    return 'No Alt Available';
  };

  return (
    <>
      {items.map((item: any) => (
        <motion.li
          key={item.id}
          className={className}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}>
          <Link to={item.fields.slug}>
            {isDashboard ? (
              <Card
                alt={getAltImage(item)}
                showPicture={isDashboard}
                backgroundImage={getImage(item.frontmatter.image)}>
                <span>
                  <p>{item.frontmatter.title}</p>
                </span>
              </Card>
            ) : (
              item.frontmatter.title
            )}
          </Link>
        </motion.li>
      ))}
    </>
  );
};

export default DropdownItem;
