/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { RootNavigator } from './app/navigators/RootNavigator';

export default class App extends Component<{}> {
  render() {
    return (
		<RootNavigator />
    );
  }
}
