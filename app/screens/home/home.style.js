import { StyleSheet } from 'react-native';
import { styleConstant } from '../../commonModules';

export const styles = StyleSheet.create({
	iconContainer:{
		position:'absolute',
		backgroundColor: 'transparent'
	},
	landscapeICntnr:{
		bottom: 12,
		right: -20,
	},
	portraitICntnr:{
		bottom: -18,
		right: 10,
	},
	icon: {
		fontSize: 35,
		color: styleConstant.themeColor,
		alignSelf: 'center',
		borderRadius: 18
	},
});
