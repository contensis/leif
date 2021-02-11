import React from 'react';
import RelatedLinksStyled from './RelatedLinks.styled';
import Image from '../image/Image';

interface Props {
  className?: string;
  title?: string,
  links: any[];
}

const RelatedLinks: React.FC<Props> = ({ className, title, links }) => {
  if (!links || links.length < 1) return null;
  return (
    <RelatedLinksStyled className={className}>
      {title && <h4 className="related-links__title">{title}</h4>}
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <div className="related-links__link">
                <Image image={link.image} />
                <span>{link.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </RelatedLinksStyled>
  ); 
}

export default RelatedLinks;
