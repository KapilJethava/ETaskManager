import { StyleSheet } from 'react-native';
import { styleConstant, Utility } from '../../commonModules';

const styleParams = {
	minWidth: 60,
	containerPadding: 3,
	tileMargin: 2,
	borderWidth: 1,
	parentBorder: 2,
	containerMargin: 7
};

const { width, numOfTiles } = Utility.getItemParams(styleParams);

const styles = StyleSheet.create({
	fcolumn: {
		flexDirection: 'column',
	},
	commonPadding: {
		padding: 7
	},
	marginBottom: {
		marginBottom: styleParams.containerMargin
	},
	marginRight:{
		marginRight: styleParams.containerMargin
	},
	noPadTop: {
		paddingTop: 0
	},
	tilesContainer: {
		padding: styleParams.containerPadding,
		justifyContent: 'flex-start'
	},
	icon: {
		fontSize: 38,
		alignSelf: 'center',
		backgroundColor: 'transparent'
	},
	iconTile: {
		margin: styleParams.tileMargin,
		borderWidth: styleParams.borderWidth,
		borderRadius: 3,
		borderColor: '#dedede',
		justifyContent: 'center'
	}
});

export { width, styleParams, styles, numOfTiles };
