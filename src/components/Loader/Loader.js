import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, View, ActivityIndicator, Text,
} from 'react-native';
import Lang from '../../utilities/Lang';

/* eslint-disable */
class Loader extends Component {
  static defaultProps = {
    loading: false,
    message: Lang.get('components.loader.messageLoading'),
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.loading,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.loading !== this.props.loading) {
      if (nextProps.loading === true) {
        this.start();
      } else {
        this.done();
      }
    }
    return true;
  };

  start = () => {
    this.setState({ modalVisible: true });
  };

  done = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { message } = this.props;

    return (
      <Modal
        animationType="none"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
        ref={(ref) => {
          this.modal = ref;
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator color="#fff" size="large" />
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              >
                {message}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
Loader.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
};
export default Loader;
