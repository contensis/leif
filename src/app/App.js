import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import { ThemeProvider } from 'styled-components';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import { Loading } from '~/core/routes/Loading';
import NotFound from '~/pages/NotFound';
import { selectRouteLoading } from './core/redux/selectors';

import GlobalStyle from '~/theme/global/globalStyles';
import { defaultTheme } from './theme/leif';

const AppRoot = props => {
  const stateLoading = useSelector(selectRouteLoading);
  const [isLoading, setIsLoading] = useState(stateLoading);
  useEffect(() => {
    setIsLoading(stateLoading);
  }, [stateLoading]);
  return (
    <>
      <div id="app-root">
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {isLoading && <Loading {...props} />}
          <RouteLoader {...props} notFoundComponent={NotFound} />
        </ThemeProvider>
      </div>
    </>
  );
};

export default hot(AppRoot);
