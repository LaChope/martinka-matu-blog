import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Card from '../Card';

interface Props {
  children?: ReactNode;
  className?: string;
  items: any;
  showPicture: boolean;
  picture?: IGatsbyImageData;
  isDashboard?: boolean;
}

const DropdownItem = ({ items, className, showPicture }: Props) => {
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
        <li key={item.id} className={className}>
          <Link to={item.fields.slug}>
            {showPicture ? (
              <Card
                alt={getAltImage(item)}
                showPicture={showPicture}
                backgroundImage={getImage(item.frontmatter.image)}>
                {item.frontmatter.title}
              </Card>
            ) : (
              item.frontmatter.title
            )}
          </Link>
        </li>
      ))}
    </>
  );
};

export default DropdownItem;
