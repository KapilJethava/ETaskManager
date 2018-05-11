import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { commonStyles, Icon, styleConstant } from '../../commonModules';

export const SelectedGroup = (props) => {
	return (
		props.group?
			<View style={[styles.sGroupCntnr, { borderRightColor: props.group.color }]}>
				<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: props.group.color }]}></View>
				<View style={[styles.groupContainer]}>
					<View style={[styles.contentWrapper]}>
						<View style={styles.iconContainer}>
							<Icon name={props.group.iconName} style={[styles.catIcon, { color: props.group.color }]} />
						</View>
						<View style={styles.contentContainer}>
							<Text style={styles.catName}>{props.group.name}</Text>
						</View>
					</View>
					<View style={[commonStyles.topRightCorner, styles.countContainer]}>
						<Text style={styles.countText}>{props.group.taskIds.length + ' Tasks'}</Text>
					</View>
				</View>
				<View style={[styles.sOptions, { borderTopColor: props.group.color }]}>

				</View>
			</View>

		:null
	);
}

const styles = StyleSheet.create({
	sGroupCntnr: {
		//selected group view
		flex:1,
		flexDirection: 'column',
		borderRightWidth: 1
	},
	sOptions: {
		height: 40,
		backgroundColor:'transparent',
		borderTopWidth:1
	},
	groupContainer: {
		padding: 10,
		margin: 5,
		flex: 1
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
		flexDirection: 'column'
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
		fontSize: 45,
		color: styleConstant.themeColor,
		borderColor: 'red',
		alignSelf: 'center'
	},
	contentContainer: {
		flex: 1,
		padding: 5,
		paddingTop: 10,
		fontSize:20
	},
	catName: {
		flex: 1,
		fontSize: 14,
		alignSelf: 'center',
		backgroundColor: 'transparent'
	}
});

