import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant, layoutAttrib } from './../../commonModules';
import { getCategories } from '../../actions';

class CategoryListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getCategories(); //call our action
	}

	render() {
		const { navigate } = this.props.navigation;
		if (this.props.loading) {
			return (<View style={styles.activityIndicatorContainer}>
				<ActivityIndicator
					animating={true}
					style={[{ height: 80 }]}
					size="small"
				/>
			</View>)
		} else {
			return (
				<TabWrapperComponent>
					<ScrollView>
						<View style={styles.catListContainer}>
							{
								this.props.categories && this.props.categories.map((category) =>
									<View style={styles.categoryContainer}>
										<View style={[styles.contentWrapper, { borderColor: category.color }]}>
											<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: category.color }]}></View>
											<View style={styles.iconContainer}>
												<Icon name={category.iconName} style={[styles.catIcon, { color: category.color }]} />
											</View>
											<View style={styles.contentContainer}>
												<Text style={styles.catName}>{category.name}</Text>
											</View>
										</View>
										<View style={[commonStyles.topRightCorner, styles.countContainer]}>
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
							navigate('AddCategory', {})
						} />
				</TabWrapperComponent>
			);
		}
	}
}
function mapStateToProps({ categoryReducer }, props) {
	return {
		categories: categoryReducer.categories,
		loading: categoryReducer.loading
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getCategories: () => dispatch(getCategories())
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryListComponent);

const styles = StyleSheet.create({
	activityIndicatorContainer: {
		backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	catListContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
		justifyContent: 'space-between',
	},
	categoryContainer: {
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
