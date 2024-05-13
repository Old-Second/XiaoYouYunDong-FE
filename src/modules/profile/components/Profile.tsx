import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtAvatar, AtIcon } from 'taro-ui';

import 'taro-ui/dist/style/components/avatar.scss';
import 'taro-ui/dist/style/components/icon.scss';

const INFO_ITEMS = [
  { herf: '/', icon: 'file-generic', content: '我的订单' },
  {
    herf: '/subpackages/profile/pages/wallet/index',
    icon: 'credit-card',
    content: '我的钱包',
  },
  { herf: '/', icon: 'share', content: '我要推广' },
  {
    herf: '/subpackages/profile/pages/activity/index',
    icon: 'file-generic',
    content: '活动报告',
  },
];

const SETTLE_ITEMS = [
  { herf: '/', icon: 'mail', content: '邀请入驻' },
  { herf: '/', icon: 'shopping-bag', content: '商家入驻' },
];

const Profile: React.FC = () => {
  const handleNavigate = (url: string) => {
    void Taro.navigateTo({
      url: url,
    });
  };

  return (
    <View className="relative flex h-screen w-full flex-col bg-gray-100">
      <View className="relative top-[8vh] flex flex-col gap-8">
        <View className="relative flex justify-center">
          <AtAvatar
            circle
            text="头像"
            size="large"
            className="absolute -top-[4vh] left-[8%] flex h-[9vh] w-[9vh] items-center justify-center rounded-full bg-white shadow-2xl"
          ></AtAvatar>
          <View className="flex h-[18vh] w-[90%] flex-col gap-3 bg-white pb-28 shadow-2xl">
            <Text className="relative left-[12vh] top-3 text-sm">用户昵称</Text>
            <Text className="relative left-[3vh] top-3 text-xs text-gray-400">
              关注 30 | 粉丝 100 | 加入 5
            </Text>
            <View className="relative top-3 flex w-full justify-center">
              <Text className="w-[90%] bg-[#F7FFE5] p-2 text-xs text-gray-400">
                个性签名
              </Text>
            </View>
            <Button
              className="absolute right-10 top-6 rounded-none bg-[#05D6A1] px-4 py-[12px] text-sm text-white"
              onClick={() => {
                handleNavigate('/subpackages/profile/pages/information/index');
              }}
            >
              编辑资料
            </Button>
          </View>
        </View>
        <View className="flex justify-center">
          <View className="flex h-[12vh] w-[90%] justify-between rounded-xl bg-white px-5">
            {INFO_ITEMS.map((item, index) => (
              <View
                key={index}
                className="flex flex-col items-center justify-center border-none bg-transparent"
                onClick={() => {
                  handleNavigate(item.herf);
                }}
              >
                <AtIcon value={item.icon} size="25"></AtIcon>
                <Text className="text-xs">{item.content}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="flex w-full justify-center">
          <View className="flex w-[90%] justify-between gap-5">
            {SETTLE_ITEMS.map((item, index) => (
              <View
                key={index}
                className="flex h-[10vh] flex-1 flex-col items-center justify-center rounded-xl bg-white"
              >
                <View
                  className="flex flex-col items-center justify-center border-none bg-transparent"
                  onClick={() => {
                    handleNavigate(item.herf);
                  }}
                >
                  <AtIcon value={item.icon} size="25"></AtIcon>
                  <Text className="text-xs">{item.content}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
