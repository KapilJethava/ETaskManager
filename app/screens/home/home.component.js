import React from 'react';
import { HomeUI } from './home.ui';
import { Animated } from 'react-native';

export class HomeComponent extends HomeUI {
	constructor(props) {
		super(props);
		this.state = {
			expanded: true,
			numOfTiles: 3,
			margin: 5,
			reloadKey: 1,
			groupTileWidth: 105,
			isLandScape: false,
			selectedGroup: null
		}
	}
}
