import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';

const HomeScreen = StackNavigator({
  Settings: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerBackTitle: 'headerBackTitle'
    }
  }
}, {
  headerMode: 'screen'
});

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
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
