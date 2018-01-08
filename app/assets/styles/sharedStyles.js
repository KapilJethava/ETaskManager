/**
 * This file contains all common styles used in app with
 * style constant variables
 */
import { StyleSheet } from 'react-native';

export const styleConstant = {
	themeColor: '#106bc8',
	textColor: '#ffffff',
	activeTabUnderLineColor: '#ffffff',
	tabNameFontSize: 15,
	appNameFontSize: 20,
	addTaskButtonColor: '#106bc8',
	addCategoryButtonColor: 'rgba(231,76,60,1)',
	addTaskIconName: 'playlist-add',
	addCategoryIconName: 'library-add'
};

export const commonStyles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 24,
		color: styleConstant.textColor,
	}
});

