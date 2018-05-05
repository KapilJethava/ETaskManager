import { StyleSheet } from 'react-native';
import { styleConstant } from '../../commonModules';

export const styles = StyleSheet.create({
	iconContainer:{
		position:'absolute',
		backgroundColor: 'transparent'
	},
	landscapeExpanded: {
		bottom: 12,
		right: 0
	},
	landscapeCollapsed: {
		bottom: 12,
		right: -20
	},
	portraitExpanded: {
		bottom: 0,
		right: 10
	},
	portraitCollapsed: {
		bottom: -18,
		right: 10
	},
	icon: {
		fontSize: 35,
		color: styleConstant.themeColor,
		alignSelf: 'center',
		borderRadius: 18
	},
});
