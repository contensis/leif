import styled from 'styled-components';
import { Panel } from '@contensis/canvas-react';
import colors from '~/theme/global/colors';

const PanelStyled = styled(Panel)`
  background-color: rgba(195, 198, 222, 0.1);
  padding: 1rem;
  margin: 0 0 .5rem; 0;

  &.success {
    box-shadow: inset 6px 0px 0px ${colors.primary};
  }
  &.warning {
    box-shadow: inset 6px 0px 0px ${colors.error};
  }
  &.note {
    box-shadow: inset 6px 0px 0px ${colors.link};
  }
`;

export default PanelStyled;
