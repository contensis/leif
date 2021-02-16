import React from 'react';
import PropTypes from 'prop-types';
import { Link as PageLink } from 'react-router-dom';
interface Props {
  className: string;
  children: any;
  download?: any;
  onClick?: (ev:any) => void;
  openInNewWindow: boolean;
  title: string;
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

  let newWindow = openInNewWindow ? '_blank' : '_self';
  uri = encodeURI(uri);

  const _handleClick = (e:any) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (newWindow != '_blank' && uri && uri.startsWith('/')) {
    return (
      <PageLink
        className={className}
        download={download}
        onClick={e => _handleClick(e)}
        title={title}
        to={uri}
      >
        {children}
      </PageLink>
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
