import styled from 'styled-components';
import { Link } from '@contensis/canvas-react';
import { Link as PageLink } from 'react-router-dom';
import colors from '~/theme/global/colors';

export const LinkBlockStyled = styled(Link)`
  color: ${colors.link};
`;

export const PageLinkStyled = styled(PageLink)`
  color: ${colors.link};
`;
