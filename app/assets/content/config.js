/**
 * All styles related to application will be kept in this file
 */
import { Dimensions } from 'react-native';
export const styleConstant = {
	themeColor: '#106bc8',
	textColor: '#ffffff',
	activeTabUnderLineColor: '#ffffff',
	tabNameFontSize: 15,
	appNameFontSize: 20,
	addTaskButtonColor: '#106bc8',
	addCategoryButtonColor: 'rgba(231,76,60,1)',
	addTaskIconName: 'playlist-add',
	addCategoryIconName: 'library-add',
};
export const layoutAttrib = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
	//isLandscape: (layoutAttrib.height <= layoutAttrib.width)
};

export const appConfig = {

};
