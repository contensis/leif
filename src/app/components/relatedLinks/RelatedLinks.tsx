import React from 'react';
import RelatedLinksStyled from './RelatedLinks.styled';
import Image from '../image/Image';

export interface Props {
  className?: string;
  title?: string;
  links: any[];
}

const RelatedLinks = ({ className, title, links }: Props) => {
  if (!links || links.length < 1) return null;
  return (
    <RelatedLinksStyled className={className}>
      {title && <h3 className="related-links__title">{title}</h3>}
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a className="related-links__link" href="#">
                <Image
                  className="related-links__image"
                  image={link.image}
                  width={74}
                  height={80}
                />
                <span className="related-links__link-title">{link.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </RelatedLinksStyled>
  );
};

export default RelatedLinks;
