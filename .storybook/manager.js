import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/app/theme/leif';
import GlobalStyle from '../src/app/theme/global/globalStyles';

import { addons } from '@storybook/addons';
import StorybookTheme from './StorybookTheme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: StorybookTheme,
  storySort: undefined,
});

addDecorator(withKnobs, {
  knobs: {
    timestamps: true,
    escapeHTML: true,
  },
});

addDecorator(story => (
  <div style={{ textAlign: 'left' }}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </div>
));

const req = require.context('../src/app/', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
