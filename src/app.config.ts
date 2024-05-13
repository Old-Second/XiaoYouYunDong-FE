export default defineAppConfig({
  pages: ['pages/home/index', 'pages/profile/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    //分包
    {
      root: 'subpackages/home',
      pages: ['pages/postActivity/index'],
    },
    {
      root: 'subpackages/profile',
      pages: [
        'pages/wallet/index',
        'pages/information/index',
        'pages/activity/index',
        'pages/withdraw/index',
      ],
    },
  ],
  tabBar: {
    /* tab页面必须放在主包里 */
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: '',
      },
      // {
      //   pagePath: '',
      //   text: '发布',
      //   iconPath: '',
      //   selectedIconPath: '',
      // },
      // {
      //   pagePath: '',
      //   text: '消息',
      //   iconPath: '',
      //   selectedIconPath: '',
      // },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: '',
        selectedIconPath: '',
      },
    ],
    color: '#000000',
    backgroundColor: '#FFFFFF',
    selectedColor: '#12FFBD',
  },
});
