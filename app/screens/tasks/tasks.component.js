import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, FlatList } from 'react-native';

import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';
import { TabWrapperComponent, TaskComponent } from '../../components';
import { mockData } from './../../MockData';
import { getTasksAndGroups } from '../../actions'
import { TaskModel } from '../../models';

class TasksComponent extends React.Component {
	constructor(props) {
		super(props);
		this.groupArr = {};
	}

	componentDidMount = () => {
		this.props.getTasksAndGroups();
	}

	render() {
		const { navigate } = this.props.navigation;
		this.props.groups.forEach((grp) => {
			this.groupArr[grp.id] = grp;
		});

		return (
			<TabWrapperComponent>
				<ScrollView>
					<FlatList
						data={ this.props.tasks }
						renderItem={({ item }) => <TaskComponent task={item} group={this.groupArr[item.groupId]} />}
					/>
				</ScrollView>
				<ActionButton buttonColor={styleConstant.addTaskButtonColor}
					icon={<Icon name={styleConstant.addTaskIconName} style={commonStyles.actionButtonIcon} />} />
			</TabWrapperComponent>
		);
	}
}

function mapStateToProps({ taskReducer }, props) {
	return {
		tasks: taskReducer.tasks,
		groups: taskReducer.groups,
		loading: taskReducer.loading
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getTasksAndGroups: () => dispatch(getTasksAndGroups()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksComponent);
