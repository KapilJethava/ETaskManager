import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { TabNavigator } from "react-navigation";

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
	Recent: { screen: RecentChatsScreen },
	All: { screen: AllContactsScreen },
},
{
	tabBarPosition: 'top',
	swipeEnabled: true,
	animationEnabled: true,
	allowFontScaling: false,
	tabBarOptions: {
		activeTintColor: '#e91e63',
		labelStyle: {
			fontSize: 15,
			color: '#fff',
			alignItems: 'center'
		},
		style: {
			backgroundColor: '#106bc8',
		},
		tabStyle: {
			alignSelf: 'center'
		}
	}

});


