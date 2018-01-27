import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { commonStyles } from './../../commonModules';
export class TabWrapperComponent extends React.Component {
	render() {
		return (
			<View style={[commonStyles.generalBG, commonStyles.flex]}>
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
