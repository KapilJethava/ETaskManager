/**
 * This file contains all common styles used in app with
 * style constant variables
 */
import { StyleSheet } from 'react-native';
import { styleConstant } from './../content/config';

export const commonStyles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 24,
		color: styleConstant.textColor,
	},
	stretchToParent:{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	topRightCorner:{
		position: 'absolute',
		top: 0,
		right: 0
	},
	catBgOpacity:{
		opacity: 0.1
	},
	generalBG:{
		backgroundColor:'#fff'
	},
	flex:{
		flex:1
	},
	textBox: {
		fontSize: 18,
		paddingLeft: 7,
		borderWidth:0,

	},
	borderAll: {
		borderWidth: 1,
		borderColor: '#aaa',
		borderRadius: 2
	},
});

