import React from 'react';
import { HomeUI } from './home.ui';
import { Animated } from 'react-native';

export class HomeComponent extends HomeUI {
	constructor(props) {
		super(props);
		this.state = {
			isLandScape: false,
			expanded: true,
			animation: new Animated.Value(0)
		}
	}
}
