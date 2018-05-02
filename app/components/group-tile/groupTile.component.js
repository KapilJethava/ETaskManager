import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { commonStyles, Icon, styleConstant } from '../../commonModules';

export const GroupTile = (props) => {
	return (
		<View style={[styles.groupContainer, {marginLeft: props.margin, marginRight: props.margin}]}>
			<View style={[styles.contentWrapper, { borderColor: props.group.color }]}>
				<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: props.group.color }]}></View>
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
	);
}

const styles = StyleSheet.create({
	groupContainer: {
		padding: 10,
		margin:5
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

