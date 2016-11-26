'use strict';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/actionCreator';
import Counter from '../components/Counter';

class MainPage extends Component {
  render(
    const {number, actions} = this.props;
    return (
      <View>
        <Counter text={number} onPress={actions} />
      </View>
    );
  );
}
