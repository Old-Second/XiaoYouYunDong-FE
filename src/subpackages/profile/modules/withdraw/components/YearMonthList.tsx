import { Text, View } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/loading.scss';

interface MouthButtonListProps {
  monthsInYear: string[];
}

interface YearMonthListProps {
  startYear: number;
  startMonth: number;
  currentYear: number;
  currentMonth: number;
}

const MouthButtonList: React.FC<MouthButtonListProps> = ({ monthsInYear }) => {
  return (
    <View className="grid grid-cols-4 gap-4">
      {monthsInYear.map((monthName, index) => (
        <AtButton
          key={index}
          className="flex w-20 items-center justify-center border-none bg-white px-4 py-1 text-[2.5vh]"
        >
          {monthName}
        </AtButton>
      ))}
    </View>
  );
};

const YearMonthList: React.FC<YearMonthListProps> = ({
  startYear,
  startMonth,
  currentYear,
  currentMonth,
}) => {
  const YearMonthLists: React.ReactNode[] = [];
  let year = startYear;
  let month = startMonth;

  while (year <= currentYear) {
    const MonthsInYear: string[] = [];
    YearMonthLists.push(<Text className="text-[1.8vh] text-gray-500">{year}年</Text>);

    for (month; month >= 1 && month <= 12; month++) {
      if (year === currentYear && month > currentMonth) {
        break;
      }
      MonthsInYear.push(`${month}月`);
    }

    YearMonthLists.push(
      <MouthButtonList key={year} monthsInYear={MonthsInYear}></MouthButtonList>
    );

    year++;
    month = 1;
  }

  return YearMonthLists;
};

export default YearMonthList;
