import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant, layoutAttrib } from './../../commonModules';

export class CategoryListComponent extends React.Component {
	render() {
		return (
			<TabWrapperComponent>
				<ScrollView>
					<View style={styles.catListContainer}>
						{
							mockData.catList.map((category) =>
								<View style={styles.categoryContainer}>
									<View style={[styles.contentWrapper,{borderColor: category.color}]}>
										<View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundColor: category.color }}></View>
										<View style={styles.iconContainer}>
											<Icon name={category.iconName} style={[styles.catIcon, { color: category.color }]} />
										</View>
										<View style={styles.contentContainer}>
											<Text style={styles.catName}>{category.name}</Text>
											{/* <Text numberOfLines={2} style={styles.desc}>{'tasks related to \npersonal things home'}</Text> */}
										</View>
									</View>
									<View style={styles.countContainer}>
										<Text style={styles.countText}>{category.numberOfTasks + ' Tasks'}</Text>
									</View>

								</View>
							)
						}
					</View>
				</ScrollView>
				<ActionButton buttonColor={styleConstant.addCategoryButtonColor}
					icon={<Icon name={styleConstant.addCategoryIconName} style={commonStyles.actionButtonIcon} />} />
			</TabWrapperComponent>
		);
	}
}
class CategoryModel {
	constructor(key, name, iconName, color, taskCount) {
		this.key = key;
		this.name = name;
		this.iconName = iconName;
		this.color = color;
		this.numberOfTasks = taskCount;
		this.description = "test test test test";
	}
}
const mockData = {
	catList: [
		new CategoryModel(1, 'Home', 'home', 'rgb(66, 133, 244)', 10),
		new CategoryModel(2, 'Work', 'work', 'rgb(235, 67, 53)', 12),
		new CategoryModel(3, 'Call', 'call', 'rgb(52, 168, 83)', 14),
		new CategoryModel(4, 'Billing', 'payment', '#E91E63', 4),
		new CategoryModel(5, 'Home', 'home', '#00695C', 10),
		new CategoryModel(6, 'Work', 'work', '#424242', 12),
		new CategoryModel(7, 'Call', 'call', '#37474F', 14),
		new CategoryModel(8, 'Billing', 'payment', '#D84315', 4),
		// new CategoryModel(5, , 5),
		// new CategoryModel(6, 'Demonstrate your application to Simon', 'Demonstrate your application to Simon', '10:00 PM', 1),
		// new CategoryModel(7, 'Push all application code to git', 'Push all application code to git', '10:00 PM', 2),
		// new CategoryModel(8, 'Manage CRUD for tasks', 'Manage CRUD for tasks', '10:00 PM', 3),
		// new CategoryModel(9, 'Prepare awesome template for your task', 'Prepare awesome template for your task', '10:00 PM', 4),
		// new CategoryModel(10, 'Work on memory and will power', 'Work on memory and will power', '10:00 PM', 5)
	]
};
const styles = StyleSheet.create({
	catListContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
		justifyContent: 'space-between',
	},
	categoryContainer: {
		padding:10,
		// borderWidth: 1,
		// borderColor: 'red',
		// borderStyle:'dotted'
	},
	countContainer:{
		position:'absolute',
		right:0,
		top:0,
		borderWidth: 1,
		borderRadius:3,
		borderColor: 'rgb(251, 188, 5)'
	},
	countText:{
		backgroundColor:'rgb(251, 188, 5)',
		color:'blue',
		fontSize:10
	},
	contentWrapper:{
		flex:1,
		flexDirection:'column',
		borderWidth: 1,
		borderColor: '#aaa',
		borderRadius: 3,
	},
	iconContainer: {
		flex: 1,
		padding: 20,
		paddingTop:10,
		paddingBottom: 0,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor:'transparent'
	},
	catIcon: {
		fontSize: 40,
		color: styleConstant.themeColor,
		borderColor: 'red',
		alignSelf:'center'
	},
	contentContainer:{
		flex:1,
		padding:5,
		paddingBottom:10
	},
	catName: {
		flex:1,
		fontSize: 14,
		alignSelf:'center',
		backgroundColor: 'transparent'
	},
	desc:{
		flex: 1,
		fontSize: 10,
		alignSelf: 'center'
	}

});
