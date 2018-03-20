import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { commonStyles, Icon, styleConstant } from '../../commonModules';

export const TaskComponent = (props) => {
	const group = props.group || { color:styleConstant.themeColor, iconName:'home'};
	return (
		<View style={[commonStyles.flex, styles.contentWrapper]}>
			<View>
				<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: group.color }]}></View>
				<Icon name={group.iconName}
					style={[styles.catIcon, { color: group.color, borderColor: group.color }]} />

			</View>
			<View style={[commonStyles.flex, styles.taskData]}>
				<View style={[commonStyles.flex, styles.row1]}>
					<Text numberOfLines={1} style={[commonStyles.flex, styles.title]}>{props.task.title}</Text>
					<Text style={styles.time}>{props.task.time}</Text>
				</View>
				<View style={[commonStyles.flex, styles.row2]}>
					<Text numberOfLines={1} style={[commonStyles.flex, styles.desc]}>{props.task.description}</Text>
					<View style={[styles.priorityContainer, { backgroundColor: props.task.priority.color }]}>
						<Text style={[commonStyles.flex, styles.priority]}>{' '}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	contentWrapper: {
		flexDirection: 'row',
		padding: 7
	},
	catIcon: {
		fontSize: 30,
		borderWidth: 1,
		padding: 6,
		borderRadius: 2,
		width: 44,
		height: 44,
		backgroundColor: 'transparent'
	},
	taskData: {
		flexDirection: 'column',
		marginLeft: 10
	},
	row1: {
		flexDirection: 'row',
	},
	row2: {
		flexDirection: 'row',
		marginTop: 2
	},
	title: {
		fontSize: 14,
		color: '#000',
		fontWeight: 'bold',
		alignSelf: 'flex-end'
	},
	time: {
		alignSelf: 'flex-end',
		fontSize: 13,
		color: styleConstant.themeColor
	},
	desc: {
		fontSize: 12,
		alignSelf: 'flex-start'
	},
	priorityContainer: {
		alignSelf: 'flex-start',
		padding: 3,
		borderRadius: 10,
		width: 10,
		height: 10,
	},
	priority: {
		fontSize: 11,
		color: '#fff',
		alignSelf: 'center'
	}
});

