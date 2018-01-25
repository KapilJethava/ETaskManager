import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon, commonStyles } from './../../../commonModules';

export class SearchInputComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		};
	}

	textChange(text) {
		this.setState({text});
		if(this.props.onTextChange && text && text.trim().length > 0) {
			this.props.onTextChange(text.trim().toLowerCase());
		}
	}

	render() {
		return (
			<View style={[styles.container, commonStyles.borderAll, (this.props.style ? { ...this.props.style } : null)]}>
				<TextInput
					style={[commonStyles.flex, commonStyles.textBox]}
					onChangeText={(text) => { this.textChange(text) }}
					value={ this.state.text }
					placeholder={ 'Search Icon' }/>
				<Icon name={'search'} style={[styles.icon]} />
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
	},
	icon: {
		fontSize: 35,
		color: '#aaa'
	}
});
