import React from 'react';
import { action } from '@storybook/addon-actions';
import HeaderMenu from '../../src/components/molecules/header/HeaderMenus/HeaderMenus';

export default {
  title: 'header-menus',
  component: HeaderMenu,
};

export const Standard = () => <HeaderMenu onClick={action('clicked')}></HeaderMenu>;
