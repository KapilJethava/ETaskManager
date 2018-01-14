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
			<View style={styles.contentWrapper}>
				<View>
					<View style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						borderColor: 'blue', borderWidth: 1, borderStyle: 'dotted', backgroundColor:category.color,
						opacity: 0.1
					}}></View>
					<Icon name={category.iconName}
						style={[styles.catIcon,{color:category.color, borderColor: category.color}]}/>

				</View>
				<View style={styles.taskData}>
					<View style={styles.row1}>
						<Text numberOfLines={1} style={styles.title}>{this.props.task.title}</Text>
						<Text style={styles.time}>{this.props.task.time}</Text>
					</View>
					<View style={styles.row2}>
					<Text numberOfLines={1} style={styles.desc}>{this.props.task.description}</Text>
						<View style={[styles.priorityContainer, { backgroundColor:this.props.task.priority.color }]}>
							<Text style={styles.priority}>{' '}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	contentWrapper:{
		flex:1,
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
		flex:1,
		flexDirection:'column',
		marginLeft:10
	},
	row1:{
		flex:1,
		flexDirection: 'row',
	},
	row2:{
		flex: 1,
		flexDirection: 'row',
		marginTop:2
	},
	title:{
		flex:1,
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
		flex: 1,
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
		flex:1,
		alignSelf:'center'
	}
});

