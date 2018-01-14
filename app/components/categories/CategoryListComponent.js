import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant, layoutAttrib } from './../../commonModules';
import { mockData } from './../../MockData';

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
