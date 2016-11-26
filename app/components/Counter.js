'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, Button} from 'react-native';

export default class Counter extends Component {
  static propTypes = {
    onPress: PropTypes.object
  };

  render() {
    const {text, onPress} = this.props;
    return (
      <View>
        <Text style={{fontSize: 15, alignSelf: 'center'}}>{text}</Text>
        <Button title="add" onPress={onPress.increment} />
        <Text>Hello World!</Text>
        <Button title="subtract" onPress={onPress.decrement} />
      </View>
    );
  }
}
