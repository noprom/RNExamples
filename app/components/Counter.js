'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class Counter extends Component {
  static propTypes = {
    onPress: PropTypes.object
  };

  render() {
    const {text, onPress} = this.props;
    return (
      <View>
        <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Text style={{fontSize: 15, alignSelf: 'center'}}>{text}</Text>
        <Button style={styles.button} title="add" onPress={onPress.increment} />
        <Button style={styles.button} title="subtract" onPress={onPress.decrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
