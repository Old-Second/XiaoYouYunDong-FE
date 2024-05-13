import { View } from '@tarojs/components';
import { SetStateAction, useState } from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';

import ActivityCard from '@/subpackages/profile/modules/activity/components/ActivityCard';
import ActivitySearchBox from '@/subpackages/profile/modules/activity/components/ActivitySearchBox';

const tabList = [{ title: '我参与的' }, { title: '我发布的' }];
const Activity: React.FC = () => {
  const [tabsCurrent, setTabsCurrent] = useState<number>(0);
  const handleClick = (value: SetStateAction<number>) => {
    setTabsCurrent(value);
  };

  return (
    <View className="flex min-h-screen flex-col bg-[#F7F8FA] px-[5vw]">
      <ActivitySearchBox />
      <AtTabs current={tabsCurrent} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={tabsCurrent} index={0}>
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </AtTabsPane>
        <AtTabsPane current={tabsCurrent} index={1}>
          <ActivityCard showCancel />
          <ActivityCard showCancel />
          <ActivityCard showCancel />
          <ActivityCard showCancel />
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default Activity;
