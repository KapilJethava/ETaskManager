import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';

export class AddCategoryComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={[commonStyles.flex,commonStyles.generalBG]}>

			</View>
		);
	}
}
