import { Image, Text, View } from '@tarojs/components';

import HomeCard from '@/modules/home/components/HomeCard';

const squarePartition = [
  {
    label: '体育运动',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
  {
    label: '文化娱乐',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
  {
    label: '学习交流',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
  {
    label: '交友脱单',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
  {
    label: '校友圈',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
  {
    label: '活动日历',
    img: 'https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg',
  },
];
const HomeSquare: React.FC = () => {
  return (
    <View className="bg-white px-4 pt-6">
      <View className="flex justify-between">
        {squarePartition.map((item) => (
          <View key={item.label} className="flex w-12 flex-col justify-center">
            <Image className="h-12 w-12" src={item.img} />
            <Text className="text-center text-xs">{item.label}</Text>
          </View>
        ))}
      </View>
      <View></View>
      <View></View>
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </View>
  );
};

export default HomeSquare;
