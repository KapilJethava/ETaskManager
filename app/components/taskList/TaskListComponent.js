import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';
import { TaskComponent } from './TaskComponent';
import { mockData } from './../../MockData';

export class TaskListComponent extends React.Component {
	constructor(props){
		super(props);
		//folowing block is temporary to set task ids to group object
		this.categories = {};
		mockData.groups.forEach((cat)=>{
			this.categories[cat.id] = cat;
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<TabWrapperComponent>
				<ScrollView>
					<FlatList
						data={mockData.taskList}
						renderItem={({ item }) => <TaskComponent task={item} group={this.categories[item.groupId]}/>}
					/>
				</ScrollView>
				{/* <Text style={{ backgroundColor: 'transparent' }}>Task List</Text> */}
				<ActionButton buttonColor={styleConstant.addTaskButtonColor}
					icon={<Icon name={styleConstant.addTaskIconName} style={commonStyles.actionButtonIcon} />} />
			</TabWrapperComponent>
		);
	}
}
