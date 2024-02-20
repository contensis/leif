import React from 'react';
export interface Props {
  className?: string;
  children: any;
  download?: string;
  path: string;
  onClick?: (ev: any) => void;
  openInNewWindow?: boolean;
  title?: string;
}

const Link = ({
  className = '',
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  path,
  ...rest
}: Props) => {
  className += ' Link';
  if (!path) {
    return <span className={className}>{children}</span>;
  }

  const newWindow = openInNewWindow ? '_blank' : '_self';
  path = encodeURI(path);

  const doHandleClick = (e: any) => {
    if (onClick) onClick(e);
  };

  if (newWindow !== '_blank' && path?.startsWith('/')) {
    return (
      <a
        className={className}
        download={download}
        href={path}
        onClick={(e: any) => doHandleClick(e)}
        title={title}
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={className}
        download={download}
        href={path}
        onClick={e => doHandleClick(e)}
        target={newWindow}
        title={title}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
};

export default Link;
