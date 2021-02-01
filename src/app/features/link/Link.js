import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ExtSvg from './ExtSvg';

const RoutedLink = styled(
  ({
    text,
    path,
    titleattr,
    target,
    onClick,
    onBlur,
    children,
    srHidden,
    tabIndex,
    noIcon,
    style,
    // staticLink,
    className,
  }) => {
    let setTarget = '';
    let targetAuto = false;
    let manaulExtIcon = false;

    if (target) {
      if (target.toLowerCase() === 'new window') {
        manaulExtIcon = true;
        setTarget = '_blank';
      } else if (target.toLowerCase() === 'none') {
        setTarget = '';
      } else if (target.toLowerCase() === 'auto detect') {
        targetAuto = true;
      } else {
        setTarget = target;
      }
    }

    if (process.env.NODE_ENV === 'development') {
      if (!path) {
        return (
          <a className={className} href="#no-location-set">
            <span className="no-location">No location set - </span>
            {text}
            {children && children}
          </a>
        );
      }
    }

    // if (staticLink) {
    //   return (
    //     <a
    //       href={path}
    //       className={className}
    //       style={style}
    //       aria-hidden={srHidden}
    //       tabIndex={tabIndex}
    //       onClick={onClick}
    //       onBlur={onBlur}
    //       title={titleattr}
    //       target={setTarget}
    //     >
    //       {text}
    //       {children && children}
    //     </a>
    //   );
    // }

    if (
      path &&
      (path.includes('https://www.canterbury.ac.uk') ||
        path.includes('http://www.canterbury.ac.uk') ||
        path.includes('www.canterbury.ac.uk') ||
        path.includes('canterbury.ac.uk'))
    ) {
      return (
        <a
          href={path}
          className={className}
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          onClick={onClick}
          onBlur={onBlur}
          title={titleattr}
          target={setTarget}
        >
          {text}
          {children && children}
        </a>
      );
    } else if (
      path &&
      (path.includes('.pdf') ||
        path.includes('.xlsx') ||
        path.includes('.doc') ||
        path.includes('.xml') ||
        path.includes('.csv') ||
        path.includes('.zip') ||
        path.includes('.ics'))
    ) {
      return (
        <a
          href={path}
          className={className}
          rel="noopener noreferrer"
          target={target && !targetAuto ? setTarget : '_blank'}
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          onClick={onClick}
          onBlur={onBlur}
          title={titleattr}
        >
          {text}
          {children && children}
        </a>
      );
    } else if (
      path &&
      (path.includes('facebook.com') ||
        path.includes('twitter.com') ||
        path.includes('youtube.com') ||
        path.includes('linkedin.com'))
    ) {
      return (
        <a
          href={path}
          className={className}
          rel="noopener noreferrer"
          target={target && !targetAuto ? setTarget : '_blank'}
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          onClick={onClick}
          onBlur={onBlur}
          title={titleattr}
        >
          {text}
          {children && children}
        </a>
      );
    } else if (
      path &&
      (path.includes('http://') ||
        path.includes('https://') ||
        path.includes('wwww.'))
    ) {
      return (
        <a
          href={path}
          className={className}
          rel="noopener noreferrer"
          target={target && !targetAuto ? setTarget : '_blank'}
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          onClick={onClick}
          onBlur={onBlur}
          title={titleattr}
        >
          {text}
          {children && children}
          {!noIcon && <ExtSvg />}
        </a>
      );
    } else if (path && path.includes('mailto:')) {
      return (
        <a
          href={path}
          className={className}
          rel="noopener noreferrer"
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          onClick={onClick}
          onBlur={onBlur}
          title={titleattr}
        >
          {text}
          {children && children}
        </a>
      );
    } else {
      return (
        <Link
          className={className}
          to={path}
          onClick={onClick}
          onBlur={onBlur}
          style={style}
          aria-hidden={srHidden}
          tabIndex={tabIndex}
          title={titleattr}
          target={setTarget}
        >
          {text}
          {children && children}
          {manaulExtIcon && <ExtSvg />}
        </Link>
      );
    }
  }
)`
  color: ${p => p.theme.swatch && p.theme.swatch.link.initial};

  span.no-location {
    font-weight: bold;
    color: ${p => p.theme.swatch && p.theme.swatch.primary};
  }

  ${p =>
    !p.noHoverStyles &&
    `
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `};
`;

RoutedLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  titleattr: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.string,
  noIcon: PropTypes.bool,
  extSvg: PropTypes.bool,
  noHoverStyles: PropTypes.bool,
  // staticLink: PropTypes.bool,
  srHidden: PropTypes.string,
};

RoutedLink.defaultProps = {};

export default RoutedLink;
