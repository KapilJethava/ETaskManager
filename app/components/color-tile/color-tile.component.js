import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { commonStyles, Icon } from '../../commonModules';
import { FadeIn } from '../../animations';

export const ColorTile = (props) => {
	return (
		<TouchableOpacity onPress={() => props.onPress() }>
			<View style={[props.containerStyle, { borderColor: props.color }]}>
				<View style={[commonStyles.generalBG, commonStyles.stretchToParent]} />
				<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: props.color }]}></View>
				<Icon name={props.iconName} style={[props.iconStyle, { color: props.color }]} />
				{
					(props.selectedColor && props.selectedColor === props.color)
						?
						<View style={[commonStyles.topRightCorner]}>
							<FadeIn duration={400}>
								<Icon name="check" style={{ backgroundColor: 'transparent', color: 'red', fontSize: 40 }} />
							</FadeIn>
						</View>
						: null
				}
			</View>
		</TouchableOpacity>
	);
}
