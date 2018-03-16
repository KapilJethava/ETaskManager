import { StyleSheet } from 'react-native';
import { styleConstant } from '../../commonModules';

export const styles = StyleSheet.create({
	activityIndicatorContainer: {
		backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	groupsContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
		justifyContent: 'space-between',
	},
	groupContainer: {
		padding: 10
	},
	countContainer: {
		borderWidth: 1,
		borderRadius: 3,
		borderColor: 'rgb(251, 188, 5)'
	},
	countText: {
		backgroundColor: 'rgb(251, 188, 5)',
		color: 'blue',
		fontSize: 10
	},
	contentWrapper: {
		flex: 1,
		flexDirection: 'column',
		borderWidth: 1,
		borderColor: '#aaa',
		borderRadius: 3,
	},
	iconContainer: {
		flex: 1,
		padding: 20,
		paddingTop: 10,
		paddingBottom: 0,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'transparent'
	},
	catIcon: {
		fontSize: 40,
		color: styleConstant.themeColor,
		borderColor: 'red',
		alignSelf: 'center'
	},
	contentContainer: {
		flex: 1,
		padding: 5,
		paddingBottom: 10
	},
	catName: {
		flex: 1,
		fontSize: 14,
		alignSelf: 'center',
		backgroundColor: 'transparent'
	}
});
