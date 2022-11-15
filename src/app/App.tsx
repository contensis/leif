import React from 'react';
import { hot } from 'react-hot-loader';

import { ThemeProvider } from 'styled-components';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import NotFound from '~/pages/NotFound/NotFound.page';

import GlobalStyle from '~/theme/global/globalStyles';
import { defaultTheme } from './theme/leif';

import { AppRootProps } from '@zengenti/contensis-react-base';

const AppRoot = (props: AppRootProps) => {
  /*
    *notFoundComponent={NotFound}*
    This Leif 404 Page is for local development purposes only. To see this working on your live site, you will need to add this to the load balancer, to do this, please follow the steps below.

    1. Go to Contensis.com.
    2. Login and go to the help desk.
    3. Raise a new support request.
    4. Complete the form and give details of what error page you'd like to add e.g. 404, 503 etc.
    5. Upload the error page(s) as raw html files.
    6. Submit your request.
  */

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

export default hot(module)(AppRoot);
