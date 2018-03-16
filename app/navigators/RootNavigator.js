import React, { Component } from 'react';
import {
	AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { InternalNavigator } from './InternalNavigator';
import { styleConstant, globalTokens, Icon} from './../commonModules';
import GroupComponent from '../screens/group/group.component';

export const RootNavigator = StackNavigator({
	Home: {
		screen: InternalNavigator,
		navigationOptions: {
			headerTitle: globalTokens.applicationTitle,
			headerTintColor: styleConstant.textColor,
			headerStyle: {
				backgroundColor: styleConstant.themeColor,
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				fontSize: styleConstant.appNameFontSize,
				marginLeft:6,
				alignSelf: 'flex-start'
			}
		},
	},
	AddCategory: {
		screen: GroupComponent,
		navigationOptions:({navigation})=> ({
			headerTitle: 'Add Category ',
			headerTintColor: styleConstant.textColor,
			headerLeft: <Icon name={'arrow-back'} style={{ fontSize: 24, color: styleConstant.textColor, marginLeft: 10 }} onPress={() => { navigation.goBack() }}/>,
			headerStyle: {
				backgroundColor: styleConstant.themeColor,
				borderBottomWidth: 0
			},
			headerTitleStyle: {
				fontSize: 18
			}
		})
	}
});

AppRegistry.registerComponent('TaskManager', () => RootNavigator);
