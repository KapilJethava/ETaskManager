import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon, commonStyles } from './../../../commonModules';

export class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.value
		};
	}

	static defaultProps = {
		showIcon: false,
		value: '',
		placeholder: 'Enter Text'
	};

	textChange(text) {
		this.setState({ text });
		if (this.props.onTextChange && text && text.trim().length > 0) {
			this.props.onTextChange(text.trim().toLowerCase());
		}
	}

	render() {
		return (
			<View style={[styles.container, commonStyles.borderAll, commonStyles.generalBG, (this.props.style ? { ...this.props.style } : null)]}>
				<TextInput
					underlineColorAndroid='transparent'
					autoCorrect={false}
					style={[commonStyles.flex, commonStyles.textBox]}
					onChangeText={(text) => { this.textChange(text) }}
					value={this.state.text}
					placeholder={this.props.placeholder} />
				{
					this.props.showIcon ? <Icon name={'search'} style={[styles.icon]} /> : null
				}

			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		...Platform.select({
			ios:{
				height: 37
			}
		})
	},
	icon: {
		fontSize: 35,
		color: '#aaa',
		alignSelf: 'center',
	}
});
