import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon, commonStyles } from '../../commonModules';

export const InputComponent = (props) => {
	return (
		<View style={[styles.container, commonStyles.borderAll, commonStyles.generalBG, (props.style ? { ...this.props.style } : null)]}>
			<TextInput
				underlineColorAndroid='transparent'
				autoCorrect={false}
				style={[commonStyles.flex, commonStyles.textBox]}
				onChangeText={(text) => { props.onTextChange(text) }}
				value={props.value}
				placeholder={props.placeholder} />
			{
				props.showIcon ? <Icon name={'search'} style={[styles.icon]} /> : null
			}
		</View>
	)
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
