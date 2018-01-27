import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';

export class TaskComponent extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const category = this.props.category;
		return (
			<View style={[commonStyles.flex,styles.contentWrapper]}>
				<View>
					<View
						style={[commonStyles.stretchToParent, commonStyles.catBgOpacity,
							{ backgroundColor: category.color}]}></View>
					<Icon name={category.iconName}
						style={[styles.catIcon,{color:category.color, borderColor: category.color}]}/>

				</View>
				<View style={[commonStyles.flex,styles.taskData]}>
					<View style={[commonStyles.flex, styles.row1]}>
						<Text numberOfLines={1} style={[commonStyles.flex, styles.title]}>{this.props.task.title}</Text>
						<Text style={styles.time}>{this.props.task.time}</Text>
					</View>
					<View style={[commonStyles.flex, styles.row2]}>
						<Text numberOfLines={1} style={[commonStyles.flex,styles.desc]}>{this.props.task.description}</Text>
						<View style={[styles.priorityContainer, { backgroundColor:this.props.task.priority.color }]}>
							<Text style={[commonStyles.flex,styles.priority]}>{' '}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	contentWrapper:{
		flexDirection: 'row',
		padding: 7
	},
	catIcon:{
		fontSize:30,
		borderWidth:1,
		padding:6,
		borderRadius:2,
		width:44,
		height:44,
		backgroundColor:'transparent'
	},
	taskData:{
		flexDirection:'column',
		marginLeft:10
	},
	row1:{
		flexDirection: 'row',
	},
	row2:{
		flexDirection: 'row',
		marginTop:2
	},
	title:{
		fontSize:14,
		color: '#000',
		fontWeight:'bold',
		alignSelf:'flex-end'
	},
	time: {
		alignSelf: 'flex-end',
		fontSize: 13,
		color:styleConstant.themeColor
	},
	desc: {
		fontSize:12,
		alignSelf:'flex-start'
	},
	priorityContainer:{
		alignSelf: 'flex-start',
		padding: 3,
		borderRadius: 10,
		width:10,
		height:10,
	},
	priority:{
		fontSize: 11,
		color: '#fff',
		alignSelf:'center'
	}
});

