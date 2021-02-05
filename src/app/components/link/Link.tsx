import React from 'react';
import PropTypes from 'prop-types';
// import { Link as PageLink } from 'react-router-dom';
interface Props {
  className: string;
  children: any;
  download?: any;
  onClick?: Function;
  openInNewWindow: boolean;
  title: string;
  uri: string;
}

const Link: React.FC<Props> = ({
  className = '',
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  uri,
}) => {
  className += ' Link';
  if (!uri) {
    return <span className={className}>{children}</span>;
  }

  let newWindow = openInNewWindow ? '_blank' : '_self';
  uri = encodeURI(uri);

  if (newWindow != '_blank' && uri && uri.startsWith('/')) {
    return (
      // <PageLink
      //   className={className}
      //   download={download}
      //   onClick={onClick}
      //   title={title}
      //   to={uri}
      // >
      //   {children}
      // </PageLink>
      <span>{children}</span>
    );
  } else {
    return (
      <a
        className={className}
        download={download}
        href={uri}
        onClick={e => onClick(e)}
        target={newWindow}
        title={title}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  download: PropTypes.string,
  onClick: PropTypes.func,
  openInNewWindow: PropTypes.bool,
  title: PropTypes.string,
  uri: PropTypes.string,
};

export default Link;
