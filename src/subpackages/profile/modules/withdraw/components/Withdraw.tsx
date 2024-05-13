import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import { AtFloatLayout, AtIcon } from 'taro-ui';

import 'taro-ui/dist/style/components/float-layout.scss';
import 'taro-ui/dist/style/components/icon.scss';

import Record from '@/common/elements/Record';

import YearMonthList from './YearMonthList';

const RECORD_ITEMS = [
  {
    content: '钱包提现-支付宝15902718000',
    timestamp: '2023-01-01 12:00',
    amount: '300.00',
  },
  {
    content: '钱包提现-支付宝15902718000',
    timestamp: '2023-01-01 12:00',
    amount: '300.00',
  },
];

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
            {RECORD_ITEMS.map((item, index) => (
              <Record
                key={index}
                content={item.content}
                timestamp={item.timestamp}
                amount={item.amount}
              />
            ))}
          </View>
        </View>
        <Text className="text-[1.5vh] text-gray-500">当月无更多提现记录</Text>
      </View>
    </View>
  );
};

export default Withdraw;
