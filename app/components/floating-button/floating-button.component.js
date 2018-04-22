import React from 'react';
import ActionButton from 'react-native-action-button';

import { StyleSheet, Text, View } from 'react-native';
import { commonStyles, Icon, styleConstant } from '../../commonModules';

export const FloatingButton = (props) => {
	return <ActionButton buttonColor={props.buttonColor}
		renderIcon={(active) => (<Icon name={props.icon.name} style={props.icon.style} />)}
		onPress={() => props.onPress()} />
}


