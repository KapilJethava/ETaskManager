import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant, layoutAttrib } from './../../commonModules';
import { mockData } from './../../MockData';

export class CategoryListComponent extends React.Component {
	constructor(props){
		super(props)
		//folowing block is temporary to set task ids to category object
		mockData.taskList.forEach((tl) => {
			let cId = tl.categoryId;
			let c = mockData.catList.find((ct) => ct.key === cId);
			if (c) {
				c.taskIds.push(tl.key);
			}
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<TabWrapperComponent>
				<ScrollView>
					<View style={styles.catListContainer}>
						{
							mockData.catList.map((category) =>
								<View style={styles.categoryContainer}>
									<View style={[styles.contentWrapper,{borderColor: category.color}]}>
										<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: category.color }]}></View>
										<View style={styles.iconContainer}>
											<Icon name={category.iconName} style={[styles.catIcon, { color: category.color }]} />
										</View>
										<View style={styles.contentContainer}>
											<Text style={styles.catName}>{category.name}</Text>
										</View>
									</View>
									<View style={styles.countContainer}>
										<Text style={styles.countText}>{category.taskCount + ' Tasks'}</Text>
									</View>
								</View>
							)
						}
					</View>
				</ScrollView>
				<ActionButton buttonColor={styleConstant.addCategoryButtonColor}
					icon={<Icon name={styleConstant.addCategoryIconName} style={commonStyles.actionButtonIcon} />}
					onPress={() =>
						navigate('AddCategory', { })
					}/>
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
		padding:10
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
	}
});
