import { layoutAttrib } from '../commonModules';
import { Alert } from 'react-native';
export const getItemParams = (params) => {
	//params.layoutWidth = layoutAttrib.width;
	const LWM2PD = (params.layoutWidth - 2 * params.containerPadding);
	const _2MB = 2 * (params.tileMargin + params.borderWidth);
	var width = params.minWidth, numOfTiles = 0;

	const getTileWidth = () => {
		// W = ((LW -2PD)/NT) - 2*(M + B) - main container's border width
		width = Math.floor((LWM2PD / numOfTiles) - _2MB) - params.parentBorder;
	}

	const getNoOfTiles = () => {
		// NT = (LW-2PD)/(2M+2B+W);
		numOfTiles = Math.floor(LWM2PD / (_2MB + params.minWidth));
	}

	getNoOfTiles();
	getTileWidth();

	return {
		tileWidth: width,
		numOfTiles
	};
}
export const alertForInvalidValue = (message) =>{
	Alert.alert(
		message,
		"Invalid Data",
		[
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		],
		{ cancelable: false }
	)
}
