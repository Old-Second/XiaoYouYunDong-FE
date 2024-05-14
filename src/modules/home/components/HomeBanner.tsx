import { Icon, Image, View } from '@tarojs/components';
import { useState } from 'react';
import { AtInput } from 'taro-ui';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/input.scss';
import './custom.scss';

const HomeBanner: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <View className="relative h-48">
      <Image
        className="h-48 w-full"
        src="https://i0.hdslb.com/bfs/archive/711a2b7ea82cf65d4ca342e9cce07fff846d1292.jpg"
      />
      <View className="absolute left-3 top-2 w-1/2 rounded-xl bg-white/[.8] pl-3">
        <View className="flex h-9 items-center justify-center text-xl">
          <Icon size="24" type="search" className="h-6" />
          <AtInput
            name="searchHome"
            type="text"
            confirmType="search"
            border={false}
            clear
            value={searchValue}
            onChange={handleSearchChange}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeBanner;
