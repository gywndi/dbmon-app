import { ComponentClass } from 'react';
import { ConfigCtrl } from './legacy/config';
import { AppPlugin, AppRootProps } from '@grafana/data';
import { Page1 } from './config/Page1';
import { Page2 } from './config/Page2';
import { RootPage } from './RootPage';
import { AppSettings } from './types';

export { ConfigCtrl as ConfigCtrl };

export const plugin = new AppPlugin<AppSettings>()
  .setRootPage((RootPage as unknown) as ComponentClass<AppRootProps>)
  .addConfigPage({
    title: 'Page 1',
    icon: 'info-circle',
    body: Page1,
    id: 'page1',
  })
  .addConfigPage({
    title: 'Page 2',
    icon: 'user',
    body: Page2,
    id: 'page2',
  });
