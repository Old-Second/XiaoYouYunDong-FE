import { Button, Text, View } from '@tarojs/components';
import { Eye } from 'lucide-react';
import { Component, PropsWithChildren } from 'react';

import 'taro-ui/dist/style/components/button.scss';
import './index.scss';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <View className="relative flex h-screen w-full flex-col bg-gray-100">
        <View className="relative top-[4vh] flex justify-center gap-8">
          <View className="flex h-[28vh] w-[90%] flex-col gap-6 rounded-lg bg-white px-5 py-4">
            <Text className="text-[1.8vh]">总余额</Text>
            <Eye />
            <View className="flex flex-col gap-2">
              <Text className="text-[5vh] font-semibold">$600.00</Text>
              <View className="relative flex w-full">
                <Button className="relative left-0 m-0 flex h-10 items-center justify-center border-none bg-[#05D6A1] px-10 py-1 text-[2.5vh] text-white">
                  提现
                </Button>
                <Text className="absolute bottom-0 right-0 text-[1.5vh] text-blue-500 underline">
                  提现记录
                </Text>
              </View>
              <Text className="text-[1.5vh] text-gray-500">每周二可提现</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
