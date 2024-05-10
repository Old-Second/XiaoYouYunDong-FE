import { Button, Text, View } from '@tarojs/components';
import { AtAvatar, AtIcon } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss';

const Profile: React.FC = () => {
  return (
    <View className="relative flex h-screen w-full flex-col bg-slate-100">
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
        <View className="flex justify-center">
          <View className="flex h-[12vh] w-[90%] justify-between rounded-xl bg-white px-5">
            <View className="flex flex-col items-center justify-center border-none bg-transparent">
              <AtIcon value="file-generic" size="25"></AtIcon>
              <Text className="text-xs">我的订单</Text>
            </View>
            <View className="flex flex-col items-center justify-center border-none bg-transparent">
              <AtIcon value="credit-card" size="25"></AtIcon>
              <Text className="text-xs">我的钱包</Text>
            </View>
            <View className="flex flex-col items-center justify-center border-none bg-transparent">
              <AtIcon value="share" size="25"></AtIcon>
              <Text className="text-xs">我要推广</Text>
            </View>
            <View className="flex flex-col items-center justify-center border-none bg-transparent">
              <AtIcon value="file-generic" size="25"></AtIcon>
              <Text className="text-xs">活动报告</Text>
            </View>
          </View>
        </View>
        <View className="flex w-full justify-center">
          <View className="flex w-[90%] justify-between gap-5">
            <View className="flex h-[10vh] flex-1 flex-col items-center justify-center rounded-xl bg-white">
              <View className="flex flex-col items-center justify-center border-none bg-transparent">
                <AtIcon value="mail" size="25"></AtIcon>
                <Text className="text-xs">邀请入驻</Text>
              </View>
            </View>
            <View className="flex h-[10vh] flex-1 flex-col items-center justify-center rounded-xl bg-white">
              <View className="flex flex-col items-center justify-center border-none bg-transparent">
                <AtIcon value="shopping-bag" size="25"></AtIcon>
                <Text className="text-xs">商家入驻</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
