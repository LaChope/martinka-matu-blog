import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Card from '../Card';

interface Props {
  children?: ReactNode;
  className?: string;
  items: any;
  isDashboard: boolean;
  picture?: IGatsbyImageData;
}

const DropdownItemList = ({ items, className, isDashboard }: Props) => {
  const getAltImage = (item: any) => {
    if (item.frontmatter.hero_image_alt) {
      const altItem = item.frontmatter.hero_image_alt;
      return altItem.toString();
    }
    return 'No Alt Available';
  };

  return (
    <>
      {items.map((item: any, i: number) => (
        <Link key={i} className={className} to={item.fields.slug}>
          {isDashboard ? (
            <Card
              alt={getAltImage(item)}
              showPicture={isDashboard}
              backgroundImage={getImage(item.frontmatter.image)}>
              <p>{item.frontmatter.title}</p>
            </Card>
          ) : (
            item.frontmatter.title
          )}
        </Link>
      ))}
    </>
  );
};

export default DropdownItemList;
