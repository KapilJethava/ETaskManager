import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class TaskList extends React.Component {
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
