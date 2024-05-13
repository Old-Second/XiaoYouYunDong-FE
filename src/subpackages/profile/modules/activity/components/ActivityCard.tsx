import { CoverImage, Icon, Text, View } from '@tarojs/components';

interface ActivityCardProps {
  showCancel?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ showCancel = false }) => {
  return (
    <View className="my-3 flex min-h-48 flex-col rounded-xl bg-white px-3.5 py-2">
      <View className="relative h-32">
        <CoverImage src="https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg" />
        <View className="absolute left-0.5 top-0.5 rounded-3xl bg-[#05D6A1] px-3 py-1 text-xs text-white">
          华中科技大学
        </View>
        <View className="absolute right-0.5 top-0.5 rounded-sm bg-[#12FFBD] px-3 py-0.5 text-white">
          进行中
        </View>
      </View>
      <View className="mb-1 mt-2 flex justify-between">
        <Text className="w-9/12 truncate text-xs font-bold">
          第十届“大学生青年杯xxxx”足球比赛
        </Text>
        {showCancel && <Text className="text-xs">取消活动</Text>}
      </View>
      <View className="my-1 flex items-center">
        <Icon size="14" type="info" />
        <Text className="ml-1 truncate text-xs">华中科技大学南六区西门足球场丨0.4km</Text>
      </View>
      <View className="my-1 flex items-center">
        <Icon size="14" type="info" />
        <Text className="ml-1 truncate text-xs">01-01 周一 18:00-20:00</Text>
      </View>
      <View className="my-1 flex items-center">
        <Icon size="14" type="info" />
        <Text className="ml-1 truncate text-xs">
          仅限华中科技大学校友会、武汉大学校友会....等
        </Text>
      </View>
    </View>
  );
};

export default ActivityCard;
