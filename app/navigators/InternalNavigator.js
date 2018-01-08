import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, TabBarTop } from "react-navigation";
import { TaskList, CategoryList } from './../components';
import { styleConstant } from './../commonModules'

export const InternalNavigator = TabNavigator({
	Tasks: {
		screen: TaskList
	},
	Categories: {
		screen: CategoryList
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


