import React, { Component } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import ActionButton from 'react-native-action-button';
import { tabStyles } from './../../assets/styles/sharedStyles';

export class CategoryList extends React.Component {
	render() {
		return (
			<ImageBackground source={require('./../../assets/images/bg.png')}
				style={tabStyles.dataContainer}>
				<Text style={{backgroundColor:'transparent'}}>Category List</Text>
				<ActionButton
					buttonColor="rgba(231,76,60,1)"
				/>
			</ImageBackground>

		);
	}
}
