import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import Record from '@/common/components/elements/Record';

const RECORD_ITEMS = [
  {
    content: '活动收款（已扣除1%手续费）',
    timestamp: '2023-01-01 12:00',
    amount: '+300.00',
  },
  {
    content: '活动收款（已扣除1%手续费）',
    timestamp: '2023-01-01 12:00',
    amount: '+300.00',
  },
];

const Wallet: React.FC = () => {
  const handleNavigate = (url: string) => {
    void Taro.navigateTo({
      url: url,
    });
  };

  return (
    <View className="relative flex h-screen w-full flex-col bg-gray-100">
      <View className="relative top-[4vh] flex flex-col items-center gap-2">
        <View className="flex h-auto w-[90%] flex-col gap-6 rounded-lg bg-white px-5 py-4">
          <Text className="text-[1.8vh]">总余额</Text>
          <View className="flex flex-col gap-2">
            <Text className="text-[5vh] font-semibold">$600.00</Text>
            <View className="relative flex w-full">
              <Button className="relative left-0 m-0 flex h-10 items-center justify-center border-none bg-[#05D6A1] px-10 py-1 text-[2.5vh] text-white">
                提现
              </Button>
              <Text
                className="absolute bottom-0 right-0 text-[1.5vh] text-blue-500 underline"
                onClick={() => {
                  handleNavigate('/subpackages/profile/pages/withdraw/index');
                }}
              >
                提现记录
              </Text>
            </View>
            <Text className="text-[1.5vh] text-gray-500">每周二可提现</Text>
          </View>
        </View>
        <View className="flex h-auto w-[90%] flex-col gap-6 rounded-lg bg-white px-3 py-4">
          <Text className="text-[1.8vh]">账单明细</Text>
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
      </View>
    </View>
  );
};

export default Wallet;
