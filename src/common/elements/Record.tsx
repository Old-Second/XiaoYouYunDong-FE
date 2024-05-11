import { Text, View } from '@tarojs/components';

interface RecordProps {
  content: string;
  timestamp: string;
  amount: string;
}

const Record: React.FC<RecordProps> = ({ content, timestamp, amount }) => {
  return (
    <View className="relative flex h-[10vh] w-full flex-col gap-2 rounded-md border border-gray-300 px-3 py-4">
      <Text className="text-[1.8vh] font-semibold">{content}</Text>
      <Text className="text-[1.5vh] text-gray-500">{timestamp}</Text>
      <Text className="absolute bottom-4 right-3 text-[3vh] text-red-500">{amount}</Text>
    </View>
  );
};

export default Record;
