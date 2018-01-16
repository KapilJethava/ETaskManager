import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { commonStyles } from './../../commonModules';
export class TabWrapperComponent extends React.Component {
	render() {
		return (
			<View style={styles.dataContainer}>
				{/* <Image source={require('./../../assets/images/bg.png')}
					resizeMode='repeat'
					style={[{ opacity: 0.3 }, styles.dataWrapper]} /> */}
				<View style={commonStyles.stretchToParent}>
					{this.props.children}
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	dataContainer: {
		flex: 1,
		backgroundColor:'#fff'
	}
});

