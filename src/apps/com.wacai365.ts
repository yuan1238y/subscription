import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.wacai.android.wind.splash.WindDialogActivity',
      ],
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13177538',
        },
      ],
    },
  ],
});