import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	AppRegistry,
	StyleSheet
} from 'react-native';
import { InternalNavigator } from './InternalNavigator'
import { StackNavigator } from 'react-navigation';

export class ChatScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		//title: `Chat with ${navigation.state.params.user}`,
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with </Text>
			</View>
		);
	}
}


export const RootNavigator = StackNavigator({
	Home: {
		screen: InternalNavigator,
		navigationOptions: {
			//headerLeft: (<Text style={{fontSize:20,flex:1,justifyContent:'center',fontWeight:'bold',color:'#fff'}}>ES Task Manager</Text>),
			headerTitle: 'ES Task Manager',
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#106bc8',

			},
			headerTitleStyle: {
				fontSize: 20,
				marginLeft:4,
				alignSelf: 'flex-start'
			}
		},
	},
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			headerTitle: 'Chat with ...'
		}
	}
});

AppRegistry.registerComponent('RootNavigator', () => RootNavigator);

const styles = StyleSheet.create({
	rootheader: {
		fontSize: 20
	}
});
