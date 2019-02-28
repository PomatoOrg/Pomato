import React, { PureComponent } from 'react';
import {
  View, StyleSheet, StatusBar, Animated, Image, TouchableOpacity, Text,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Ping from 'react-native-ping';
import { connect } from 'react-redux';
import { DEVICE_LOCALE } from '../../utilities/Constants';
import API from '../../API';
import HostItem from './HostItem';
import HostInfo from './HostInfo';
import images from '../../resources/images';
import { changeCurrentHostByIndex } from '../../redux/ducks/currentHost';
import HomeTitleBar from './HomeTitleBar';

const BUTTON_ASPECT_RATIO = 658 / 523;
const BUTTON_WIDTH = 88;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  topBackgroundContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 150,
  },
  stretch: {
    flex: 1,
  },
  hostList: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH * BUTTON_ASPECT_RATIO,
  },
});

class Home extends PureComponent {
  state = {
    data: [
      { key: 'a111111' },
      { key: 'b111111' },
      { key: 'c111111' },
      { key: 'd111111' },
      { key: 'e111111' },
      { key: 'f111111' },
      { key: 'g111111' },
      { key: 'h111111' },
      { key: 'i111111' },
      { key: 'j111111' },
    ],
  };

  constructor(props) {
    super(props);
    this.xOffset = new Animated.Value(0);
  }

  componentDidMount = () => {
    const lang = DEVICE_LOCALE.includes('zh-') ? 'zh-CN' : 'en';
    setTimeout(async () => {
      const result = await API.fetchHostInfo(lang);
      console.log(result);
    });
  };

  test = async () => {
    // this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    console.log(DEVICE_LOCALE);
    try {
      const result = await Ping.start('114.114.114.114');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  renderScreenTopBackgroundView = () => (
    <View style={styles.topBackgroundContainer}>
      <LinearGradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={['rgb(102,142,230)', 'rgb(101,140,226)']}
        style={styles.stretch}
      />
    </View>
  );

  renderItem = ({ item: { key }, index }) => (
    <HostItem text={key} index={index} xOffset={this.xOffset} />
  );

  onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length === 1) {
      const { index } = viewableItems[0];
      this.props.changeCurrentHostByIndex(index);
      // const { changeCurrentHostByIndex } = this.props;
      // changeCurrentHostByIndex(index);
    }
  };

  render() {
    const { hostList } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated barStyle="light-content" />
        {this.renderScreenTopBackgroundView()}
        <HomeTitleBar />
        <HostInfo />
        <Animated.FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.xOffset } } }], {
            useNativeDriver: true,
          })}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
          data={hostList}
          style={styles.hostList}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image style={styles.button} source={images.ic_rocket_animated} />
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>开始连接</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

function mapStateToProps({ hostList }) {
  return {
    hostList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCurrentHostByIndex: (index) => {
      dispatch(changeCurrentHostByIndex(index));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
