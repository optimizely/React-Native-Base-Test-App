import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import APIsList from './src/screens/APIsList';
import CallWithParameters from './src/screens/CallWithParameters';

const HomeScreen = StackNavigator({
  Settings: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerBackTitle: 'Home'
    }
  },
  APIsList: {
    screen: APIsList
  },
  CallWithParameters: {
    screen: CallWithParameters
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
