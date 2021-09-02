import React from 'react';
import { hot } from 'react-hot-loader/root';

import { ThemeProvider } from 'styled-components';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import NotFound from '~/pages/NotFound/NotFound.page';

import GlobalStyle from '~/theme/global/globalStyles';
import { defaultTheme } from './theme/leif';

const AppRoot = props => {
  /*
    *notFoundComponent={NotFound}*
    This Leif 404 Page is for local development purposes only. To see this working on your live site, you will need to add this to the load balancer, to do this, please follow the steps below. 

    1. Go to Contensis.com.
    2. Login and go to the help desk.
    1. Raise a new support request.
    2. Complete the form and give details of what error page you'd like to add.
    3. Upload the error page html file.
    4. Submit your request.
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

export default hot(AppRoot);
