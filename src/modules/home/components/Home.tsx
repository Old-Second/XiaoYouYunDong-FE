import { View } from '@tarojs/components';

import HomeBanner from '@/modules/home/components/HomeBanner';
import HomeSquare from '@/modules/home/components/HomeSquare';

const Home: React.FC = () => {
  return (
    <View>
      <HomeBanner />
      <HomeSquare />
    </View>
  );
};

export default Home;
