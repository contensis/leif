import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from '../src/app/theme/globalStyles';
import { defaultTheme } from '../src/app/theme';

const ThemeDecorator = storyFn => (
  <>
    <div id="app-root">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </div>
    <div id="modal-root"></div>
  </>
);

addDecorator(ThemeDecorator);
addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
