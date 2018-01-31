import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button as StorybookButton, Welcome } from '@storybook/react/demo';

import Button from '../components/common/Button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <StorybookButton onClick={action('clicked')}>Hello Button</StorybookButton>)
  .add('with some emoji', () => <StorybookButton onClick={action('clicked')}>😀 😎 👍 💯</StorybookButton>);

storiesOf('My Button', module)
  .add('with text', () => <Button onClick={action('clicked')} content="Click Button" _color_blue/>);
