import React from 'react';

import styled, { css } from 'styled-components';
import { sizesNoUnit, region } from '../theme/global/layout';

interface RegionWrapperProps {
  theme?: any;
  className?: string;
  type?: 'header' | 'footer' | 'section' | 'div' | 'article' | 'aside';
  padding?: 'default' | 'small' | 'medium' | 'large' | 'xlarge' | 'none';
  margin: 'default' | 'small' | 'medium' | 'large' | 'xlarge' | 'none';
  width: 'default' | 'full' | 'large' | 'medium' | 'msmall' | 'small';
  align?: 'left' | 'center' | 'right';
  children: any;
}

const RegionWrapper = ({
  className,
  children,
  type,
  margin,
  width = 'default',
  padding = 'default',
}: RegionWrapperProps) => {
  const props = { className, margin, width, padding };
  switch (type) {
    case 'header':
      return <header {...props}>{children}</header>;
    case 'footer':
      return <footer {...props}>{children}</footer>;
    case 'div':
      return <div {...props}>{children}</div>;
    case 'article':
      return <article {...props}>{children}</article>;
    case 'aside':
      return <aside {...props}>{children}</aside>;
    default:
      return <section {...props}>{children}</section>;
  }
};

const _generateMargin = (margin: string) => {
  const mqArray = [
    sizesNoUnit.mobile,
    sizesNoUnit.laptop,
    sizesNoUnit.desktop,
    sizesNoUnit.largeDesktop,
  ];

  let regionMargin;
  if (margin && Array.isArray(margin)) {
    regionMargin = margin.map((m: string, idx: number) => {
      const currentMediaQuery = mqArray[idx];
      if (idx === 0) {
        return css`
          margin: ${region.margin[m]} auto;
        `;
      } else {
        return css`
          @media only screen and (min-width: ${currentMediaQuery}) {
            margin: ${region.margin[m]} auto;
          }
        `;
      }
    });
  } else {
    regionMargin = css`
      margin: ${region.margin[margin]} auto;
    `;
  }
  return regionMargin;
};

const Region = styled(RegionWrapper)`
  ${({ theme, margin, width, padding = 'default' }: RegionWrapperProps) => {
    return css`
      ${_generateMargin(margin)};
      display: block;
      position: relative;
      box-sizing: content-box;
      max-width: ${theme.region[width].width};
      ${padding !== 'none' &&
      css`
        padding-left: ${theme.region.padding[padding]};
        padding-right: ${theme.region.padding[padding]};
      `}
    `;
  }};
`;

export default Region;
