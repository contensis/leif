import React from 'react';
import { hot } from 'react-hot-loader/root';

import { ThemeProvider } from 'styled-components';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import NotFound from '~/pages/NotFound/NotFound.page';

import GlobalStyle from '~/theme/global/globalStyles';
import { defaultTheme } from './theme/leif';

const AppRoot = props => {
  return (
    <>
      <div id="app-root">
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <RouteLoader {...props} notFoundComponent={NotFound} />
        </ThemeProvider>
      </div>
    </>
  );
};

export default hot(AppRoot);
