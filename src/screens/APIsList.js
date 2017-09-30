import React, { Component } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class APIsList extends Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render () {
    const { navigate, state: { params } } = this.props.navigation;
      return (
        <View style={styles.container}>
          <FlatList
            numColumns="1"
            ItemSeparatorComponent={this.renderSeparator}
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
            renderItem={({item}) => <Button
              onPress={() => {
                console.log("button pressed");
              }}
              title={item.key}
            />}
          />
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
