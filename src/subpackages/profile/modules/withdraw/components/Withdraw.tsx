import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import { AtFloatLayout, AtIcon } from 'taro-ui';

import YearMonthList from './YearMonthList';

const Withdraw: React.FC = () => {
  const [isFloatLayoutOpen, setIsFloatLayoutOpen] = useState(false);

  const date = new Date();
  const startYear = 2023;
  const startMonth = 11;
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentTime = `${currentYear}年${currentMonth}月`;

  const handleSelectClick = (value: boolean) => {
    setIsFloatLayoutOpen(value);
  };

  return (
    <View className="relative flex h-screen w-full flex-col bg-gray-100">
      <View className="flex flex-col items-center gap-4">
        <View className="relative flex h-auto w-full px-5 pt-4">
          <Text
            className="text-[1.8vh]"
            onClick={() => handleSelectClick(!isFloatLayoutOpen)}
          >
            {currentTime}
            <AtIcon
              value={isFloatLayoutOpen ? 'chevron-up' : 'chevron-down'}
              size={20}
            ></AtIcon>
          </Text>
          <AtFloatLayout
            isOpened={isFloatLayoutOpen}
            title="请选择月份"
            onClose={() => handleSelectClick(false)}
          >
            <View className="flex h-auto w-full flex-col items-center gap-2 px-2 py-3">
              <YearMonthList
                startYear={startYear}
                startMonth={startMonth}
                currentYear={currentYear}
                currentMonth={currentMonth}
              />
            </View>
          </AtFloatLayout>
          <Text className="absolute right-5 text-[1.8vh]">收入 $600.00</Text>
        </View>
        <View className="flex h-auto w-[90%] flex-col gap-6 rounded-lg bg-white px-3 py-4">
          <View className="flex flex-col items-center gap-2">
            <View className="relative flex h-[10vh] w-full flex-col gap-2 rounded-md border border-gray-300 px-3 py-4">
              <Text className="text-[1.8vh] font-semibold">
                钱包提现-支付宝15902718000
              </Text>
              <Text className="text-[1.5vh] text-gray-500">2023-01-01 12:00</Text>
              <Text className="absolute bottom-4 right-3 text-[3vh] text-red-500">
                300.00
              </Text>
            </View>
            <View className="relative flex h-[10vh] w-full flex-col gap-2 rounded-md border border-gray-300 px-3 py-4">
              <Text className="text-[1.8vh] font-semibold">
                钱包提现-支付宝15902718000
              </Text>
              <Text className="text-[1.5vh] text-gray-500">2023-01-01 12:00</Text>
              <Text className="absolute bottom-4 right-3 text-[3vh] text-red-500">
                300.00
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-[1.5vh] text-gray-500">当月无更多提现记录</Text>
      </View>
    </View>
  );
};

export default Withdraw;
