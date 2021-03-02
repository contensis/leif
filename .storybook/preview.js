import React from 'react';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from '../src/app/theme/global/globalStyles';
import { defaultTheme } from '../src/app/theme/leif';

import { combineReducers } from 'redux-immutable';
import withReducers from '../src/app/core/redux/reducers';

const combinedReducers = combineReducers(withReducers);
const store = createStore(combinedReducers);

const ThemeDecorator = storyFn => (
  <ReduxProvider store={store}>
    <div id="app-root">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </div>
  </ReduxProvider>
);

addDecorator(ThemeDecorator);
addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
