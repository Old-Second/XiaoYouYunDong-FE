export default defineAppConfig({
  pages: ['pages/profile/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    //分包
    {
      root: 'profile',
      pages: ['pages/wallet/index', 'pages/activity/index'],
    },
  ],
  // tabBar: {
  //   /* tab页面必须放在主包里 */
  //   list: [
  //     {
  //       pagePath: '',
  //       text: '首页',
  //       iconPath: '',
  //       selectedIconPath: '',
  //     },
  //     {
  //       pagePath: '',
  //       text: '发布',
  //       iconPath: '',
  //       selectedIconPath: '',
  //     },
  //     {
  //       pagePath: '',
  //       text: '消息',
  //       iconPath: '',
  //       selectedIconPath: '',
  //     },
  //     {
  //       pagePath: 'pages/profile/profile/index',
  //       text: '我的',
  //       iconPath: '',
  //       selectedIconPath: '',
  //     },
  //   ],
  //   color: '#000000',
  //   backgroundColor: '#F5E3E3',
  //   selectedColor: '#D39999',
  // },
});
