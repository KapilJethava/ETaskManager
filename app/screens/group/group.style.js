import { StyleSheet } from 'react-native';
import { styleConstant, Utility } from '../../commonModules';

const constants = {
	minWidth: 60,
	containerPadding: 3,
	tileMargin: 2,
	borderWidth: 1,
	parentBorder: 2
};

const { width, numOfTiles } = Utility.getItemParams(constants);

const styles = StyleSheet.create({
	fcolumn: {
		flexDirection: 'column',
	},
	commonPadding: {
		padding: 7
	},
	marginBottom: {
		marginBottom: 7
	},
	noPadTop: {
		paddingTop: 0
	},
	headerButton: {
		color: styleConstant.textColor,
		borderWidth: 1,
		borderColor: '#dedede',
		borderRadius: 2,
		padding: 2,
		marginRight: 10
	},
	tilesContainer: {
		padding: constants.containerPadding,
		justifyContent: 'flex-start'
	},
	icon: {
		fontSize: 38,
		alignSelf: 'center',
		backgroundColor: 'transparent'
	},
	iconTile: {
		margin: constants.tileMargin,
		width: width,
		height: width,
		borderWidth: constants.borderWidth,
		borderRadius: 3,
		borderColor: '#dedede',
		justifyContent: 'center'
	}
});

export { width, styles, numOfTiles };
