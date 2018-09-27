import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { ComponentClass } from 'react';
import { connect } from '@tarojs/redux';
import { pageSelector } from "./redux/selector";
import { doChangeState } from "./redux/action";
// import { connect } from 'react-redux';

import './index.less';

const mapStateToProps = (state) => {
  return {
    page: pageSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doChangeState: (data: string) => {
      dispatch(doChangeState(data));
    },
  };
};
// const mapDispatchToProps = {
//   doChangeState,
// };

interface Page {
  state: {
    data: string,
  },
  props: {
    page: {
      data: string,
    }
    doChangeState: (data: string) => void,
  };
}

type PageOwnProps = {}

type PageState = {}

@connect(mapStateToProps, mapDispatchToProps)

class Page extends Component{
  config: Config = {
    navigationBarTitleText: '我的'
  }
  state = {
    data: 'init',
  };
  handleClick = () => {
    this.setState({
      data: 'click'
    });
    console.log(1111111, this.props);
    this.props.doChangeState('clicked!!!');
  }
  render() {
    return (
      <View>
        <Text>Hello wrf!</Text>.
        <Button onClick={this.handleClick}>Click Me !</Button>
        <Text>{this.props.page.data}</Text>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

export default Page as ComponentClass<PageOwnProps, PageState>;
