import React, { Component } from 'react';
import {
	AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { InternalNavigator } from './InternalNavigator';
import { styleConstant, globalTokens, Icon} from './../commonModules';
import { GroupComponent, GroupsComponent } from '../screens';
//import { GroupsComponent, TasksComponent } from '../screens';

export const RootNavigator = StackNavigator({
	Home: {
		screen: GroupsComponent,
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
	AddGroup: {
		screen: GroupComponent,
		navigationOptions:({navigation})=> ({
			headerTitle: 'Add Task Group ',
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
