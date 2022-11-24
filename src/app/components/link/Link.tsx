import React from 'react';
export interface Props {
  className?: string;
  children: any;
  download?: any;
  href?: string; // Add ability to retrofit to <a href
  onClick?: (ev: any) => void;
  openInNewWindow?: boolean;
  title?: string;
  uri: string;
}

const Link = ({
  className = '',
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  uri,
}: Props) => {
  className += ' Link';
  if (!uri) {
    return <span className={className}>{children}</span>;
  }

  const newWindow = openInNewWindow ? '_blank' : '_self';
  uri = encodeURI(uri);

  const _handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (newWindow !== '_blank' && uri && uri.startsWith('/')) {
    return (
      <a
        className={className}
        download={download}
        href={uri}
        onClick={(e: any) => _handleClick(e)}
        title={title}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={className}
        download={download}
        href={uri}
        onClick={e => _handleClick(e)}
        target={newWindow}
        title={title}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default Link;
