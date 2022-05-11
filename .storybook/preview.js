import React from 'react';
import { createStore } from 'redux';
// import { Provider as ReduxProvider } from 'react-redux';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from '../src/app/theme/global/globalStyles';
import { defaultTheme } from '../src/app/theme/leif';

const ThemeDecorator = storyFn => (
  <>
    <div id="app-root">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </div>
  </>
);

addDecorator(ThemeDecorator);
addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
