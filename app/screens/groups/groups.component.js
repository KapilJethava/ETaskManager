import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { TabWrapperComponent } from '../../components';
import { commonStyles, Icon, ActionButton, styleConstant, layoutAttrib } from '../../commonModules';
import { getGroups } from '../../actions';
import {styles} from './groups.style';

class GroupsComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getGroups(); //call our action
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
						<View style={styles.groupsContainer}>
							{
								this.props.groups.map((group) =>
									<View style={styles.groupContainer} key={group.id}>
										<View style={[styles.contentWrapper, { borderColor: group.color }]}>
											<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: group.color }]}></View>
											<View style={styles.iconContainer}>
												<Icon name={group.iconName} style={[styles.catIcon, { color: group.color }]} />
											</View>
											<View style={styles.contentContainer}>
												<Text style={styles.catName}>{group.name}</Text>
											</View>
										</View>
										<View style={[commonStyles.topRightCorner, styles.countContainer]}>
											<Text style={styles.countText}>{group.taskIds.length + ' Tasks'}</Text>
										</View>
									</View>
								)
							}
						</View>
					</ScrollView>
					<ActionButton buttonColor={styleConstant.addGroupButtonColor}
						renderIcon={(active) => (<Icon name={styleConstant.addGroupIconName} style={commonStyles.actionButtonIcon} />)}
						onPress={() =>
							navigate('AddGroup', {})
						} />
				</TabWrapperComponent>
			);
		}
	}
}
function mapStateToProps({ groupReducer }, props) {
	return {
		groups: groupReducer.groups,
		loading: groupReducer.loading
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getGroups: () => dispatch(getGroups())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupsComponent);

