import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.less';

class Page extends Component{
  config: Config = {
    navigationBarTitleText: '我的'
  }
  render() {
    return (
      <View>
        <Text>Hello wrf!</Text>
      </View>
    );
  }
}

export default Page;
