import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CallWithParameters extends Component {
  render () {
    const { navigate, state: { params } } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Call With Parameters</Text>
          <Text>{this.props.APIName}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
