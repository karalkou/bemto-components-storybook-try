import { configure, addDecorator } from '@storybook/react';

import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../src/components/themes/theme';
import colors from '../src/components/themes/colors';

function loadStories() {
  require('../src/stories');
}

addDecorator((story) => (
    <ThemeProvider theme={colors}>
        {story()}
    </ThemeProvider>
));

configure(loadStories, module);
