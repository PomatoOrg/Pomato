import React, { PureComponent } from 'react';
import {
  View, Text, StyleSheet, Platform, Image,
} from 'react-native';
import Lang from '../../utilities/Lang';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    alignItems: 'stretch',
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1.5,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowRadius: 10,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  hostBsseInfoContainer: {
    flexDirection: 'row',
  },
  hostNetworkDetailInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 16,
  },
  countrySubContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
  flagImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    borderRadius: 999,
  },
  countryText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  delayText: {
    color: 'lightgreen',
    fontSize: 12,
  },
  connectionTimeText: {
    fontSize: 12,
    color: 'rgb(103,185,223)',
  },
  networkTextTitle: {
    color: 'rgb(144,144,144)',
    fontSize: 12,
  },
  networkTextContent: {
    color: 'rgb(30,30,30)',
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

class HostInfo extends PureComponent {
  renderBaseInfoView = () => (
    <View style={styles.hostBsseInfoContainer}>
      <View style={styles.flagImageContainer}>
        <Image style={styles.flagImageContainer} />
      </View>
      <View style={styles.countrySubContainer}>
        <Text style={styles.countryText}>Country</Text>
        <Text style={styles.delayText}>Delay: 16 ms</Text>
        <Text style={styles.connectionTimeText}>Connect Time:21:24:07</Text>
      </View>
    </View>
  );

  renderNetworkDetailView = () => {
    const DetailItem = ({ title, content }) => (
      <View>
        <Text style={styles.networkTextTitle}>{title}</Text>
        <Text style={styles.networkTextContent}>{content}</Text>
      </View>
    );

    return (
      <View style={styles.hostNetworkDetailInfoContainer}>
        <View style={styles.stretch}>
          <DetailItem title={Lang.get('screens.home.labelDownloadSpeed')} content="1,43 Mbit/s" />
          <DetailItem title={Lang.get('screens.home.labelDownloadTotal')} content="955 MB" />
        </View>
        <View style={styles.stretch}>
          <DetailItem title={Lang.get('screens.home.labelUploadSpeed')} content="1,43 Mbit/s" />
          <DetailItem title={Lang.get('screens.home.labelUploadTotal')} content="255 MB" />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderBaseInfoView()}
        {this.renderNetworkDetailView()}
      </View>
    );
  }
}

export default HostInfo;
