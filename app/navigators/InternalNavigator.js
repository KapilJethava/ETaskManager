import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, TabBarTop } from "react-navigation";
import { TaskList, CategoryList } from './../components';

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
			fontSize: 15,
			color: '#fff',
			alignItems: 'center'
		},
		style: {
			backgroundColor: '#106bc8',
			borderTopWidth: 0
		},
		indicatorStyle: {
			backgroundColor: '#fff',
			height: 3
		}
	}
});


