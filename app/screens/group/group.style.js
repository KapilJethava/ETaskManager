import {StyleSheet} from 'react-native';
import {styleConstant, layoutAttrib} from '../../commonModules';
import { CategoryModel } from '../../models';

const constants = {
	layoutWidth: layoutAttrib.width,
	minWidth: 60,
	containerPadding: 3,
	tileMargin: 2,
	borderWidth: 1
};

const width = 0;
const numOfTiles = 5;
const setWidth = () => {
	const LWM2PD = (constants.layoutWidth - 2 * constants.containerPadding);
	const _2MB = 2 * (constants.tileMargin + constants.borderWidth);

	const getTileWidth = () => {
		// W = ((LW -2PD)/NT) - 2*(M + B) - main container's border width
		width = Math.floor((LWM2PD / numOfTiles) - _2MB) - 2;
	}

	const getNoOfTiles = () => {
		// NT = (LW-2PD)/(2M+2B+W);
		numOfTiles = Math.floor(LWM2PD / (_2MB + constants.minWidth));
	}

	getNoOfTiles();
	getTileWidth();
}
setWidth();

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
