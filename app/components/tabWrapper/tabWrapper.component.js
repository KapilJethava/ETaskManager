import React from 'react';
import { View } from 'react-native';
import { commonStyles } from './../../commonModules';

export const TabWrapperComponent = (props) => {
	return (
		<View style={[commonStyles.generalBG, commonStyles.flex]}>
			<View style={commonStyles.stretchToParent}>
				{props.children}
			</View>
		</View>
	);
}
