import { Button, Text, View } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss';

const Profile: React.FC = () => {
  return (
    <View className="relative flex h-full w-full flex-col">
      <View className="relative top-[8vh] flex justify-center">
        <AtAvatar
          circle
          text="头像"
          size="large"
          className="absolute -top-[4vh] left-[8%] flex h-[9vh] w-[9vh] items-center justify-center rounded-full bg-white shadow-2xl"
        ></AtAvatar>
        <View className="flex h-[18vh] w-[90%] flex-col gap-3 pb-28 shadow-2xl">
          <Text className="relative left-[12vh] top-3 text-sm">用户昵称</Text>
          <Text className="relative left-[3vh] top-3 text-xs text-gray-300">
            关注 30 | 粉丝 100 | 加入 5
          </Text>
          <View className="relative top-3 flex w-full justify-center">
            <Text className="w-[90%] bg-[#F7FFE5] p-2 text-xs text-gray-300">
              个性签名
            </Text>
          </View>
          <Button className="absolute right-10 top-6 rounded-none bg-[#05D6A1] px-4 py-[12px] text-sm text-white">
            编辑资料
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Profile;
