import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator, TabBarTop } from "react-navigation";

class RecentChatsScreen extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>List of recent chats</Text>
				<Button
					onPress={() => navigate('Chat', { user: 'Kapil' })}
					title="Chat with Lucy"
				/>
			</View>
		);
	}
}

class AllContactsScreen extends React.Component {
	render() {
		return <Text>List of all contacts</Text>
	}
}

export const InternalNavigator = TabNavigator({
	Tasks: {
		screen: RecentChatsScreen
	},
	Categories: {
		screen: AllContactsScreen
	},
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


