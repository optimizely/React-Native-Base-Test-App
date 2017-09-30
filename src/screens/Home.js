import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import APIs from './APIs';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          What would you like to test?
        </Text>
        <Button
          onPress={() => navigate('APIs')}
          title="APIs"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
