import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, TabBarTop } from "react-navigation";
import { styleConstant } from './../commonModules';
import { GroupsComponent, TasksComponent } from '../screens';

export const InternalNavigator = TabNavigator({
	Groups: {
		screen: GroupsComponent
	},
	Tasks: {
		screen: TasksComponent
	}
},
{
	/*
	For iOS, it is mandatory to define tabBarComponent as TabBarTop explicitly
	in case the underline should be displayed for active/selected tab
	*/
	tabBarComponent: TabBarTop,
	tabBarPosition: 'top',
	swipeEnabled: true,
	animationEnabled: true,
	allowFontScaling: false,
	tabBarOptions: {
		labelStyle: {
			fontSize: styleConstant.tabNameFontSize,
			color: styleConstant.textColor,
			alignItems: 'center'
		},
		style: {
			backgroundColor: styleConstant.themeColor,
			borderTopWidth: 0
		},
		indicatorStyle: {
			backgroundColor: styleConstant.activeTabUnderLineColor,
			height: 3
		}
	}
});


