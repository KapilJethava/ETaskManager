import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

export class TabWrapperComponent extends React.Component {
	render() {
		return (
			<View style={styles.dataContainer}>
				{/* <Image source={require('./../../assets/images/bg.png')}
					resizeMode='repeat'
					style={[{ opacity: 0.3 }, styles.dataWrapper]} /> */}
				<View style={styles.dataWrapper}>
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
	},
	dataWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});

