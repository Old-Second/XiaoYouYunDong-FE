import { ScrollView, View } from '@tarojs/components';
import { SetStateAction, useState } from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';

import '@/subpackages/profile/modules/activity/components/custom-theme.scss';

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
          <ScrollView scrollY className="h-[80vh]">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </ScrollView>
        </AtTabsPane>
        <AtTabsPane current={tabsCurrent} index={1}>
          <ScrollView scrollY className="h-[80vh]">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </ScrollView>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default Activity;
