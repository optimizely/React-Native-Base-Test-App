import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class CallWithParameters extends Component {
  render () {
    const { navigate, state: { params } } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Call With Parameters</Text>
          <Text>API Name: activate</Text>
          <View>
          <Text>Experiment Key: </Text>
          <TextInput
            style={{height:60, width: 100, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            editable={true}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            placeholder='placeholder text'
            placeholderTextColor='darkgray'
            returnKeyType='next'
          />
          </View>
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
