import { Icon, View } from '@tarojs/components';
import { useState } from 'react';
import { AtInput } from 'taro-ui';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/input.scss';

const ActivitySearchBox: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <View className="my-1.5 flex items-center rounded-xl bg-white pl-3">
      <Icon size="20" type="search" />
      <AtInput
        name="searchActivity"
        type="text"
        placeholder="搜索活动"
        confirmType="search"
        border={false}
        clear
        value={searchValue}
        onChange={handleSearchChange}
      />
    </View>
  );
};

export default ActivitySearchBox;
