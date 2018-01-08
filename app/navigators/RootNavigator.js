import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { InternalNavigator } from './InternalNavigator'
import { styleConstant } from './../commonModules'

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
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			headerTitle: 'Chat with ...'
		}
	}
});

AppRegistry.registerComponent('RootNavigator', () => RootNavigator);
