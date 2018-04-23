import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { commonStyles, Icon } from '../../commonModules';

export const IconTile = (props) => {
	return (
		<TouchableOpacity onPress={() => props.onPress() }>
			<View style={[...props.containerStyle, commonStyles.generalBG, { borderColor: props.color }]}>
				<Icon name={props.iconName} style={[props.iconStyle, { color: props.color }]} />
			</View>
		</TouchableOpacity>
	);
}
