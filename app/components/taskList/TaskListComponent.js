import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { TabWrapperComponent } from './../tabWrapper/TabWrapperComponent';
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';
import { TaskComponent } from './TaskComponent';

export class TaskListComponent extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<TabWrapperComponent>
				<ScrollView>
					<FlatList
						data={mockData.taskList}
						renderItem={({ item }) => <TaskComponent task={item} />}
					/>
				</ScrollView>
				{/* <Text style={{ backgroundColor: 'transparent' }}>Task List</Text> */}
				<ActionButton buttonColor={styleConstant.addTaskButtonColor}
					icon={<Icon name={styleConstant.addTaskIconName} style={commonStyles.actionButtonIcon} />} />
			</TabWrapperComponent>
		);
	}
}
class TaskModel {
	constructor(key, title, desc, time, priority) {
		this.key = key;
		this.title = title;
		this.description = desc;
		this.time = time;
		this.priorityKey = priority;
	}
	get priority(){
		return priorityEnum[this.priorityKey];
	}
	set priority(value){
		this.priorityKey = value;
	}
}
const priorityEnum = {
	0: { color: 'grey', identifier: 'None' },
	1: { color:'red', identifier:'High'},
	2: { color: 'blue', identifier: 'Medium' },
	3: { color: 'green', identifier: 'Low' }
};
const mockData = {
	taskList: [
		new TaskModel(1, 'Pick your son from school', 'Pick your son from school','10:00 AM',1),
		new TaskModel(2, 'Email details to client', 'Email details to client', '10:15 AM', 2),
		new TaskModel(3, 'Followup with XYZ client', 'Followup with XYZ client', '10:20 AM', 3),
		new TaskModel(4, 'Pay Electricity bill', 'Pay Electricity bill', '11:00 AM', 1),
		new TaskModel(5, 'Search the best tag line for app', 'Search the best tag line for app' , '11:10 AM', 1),
		new TaskModel(6, 'Demonstrate your application to Simon', 'Demonstrate your application to Simon', '12:00 AM', 0),
		new TaskModel(7, 'Push all application code to git', 'Push all application code to git', '12:10 PM', 2),
		new TaskModel(8, 'Manage CRUD for tasks', 'Manage CRUD for tasks' , '12:30 PM', 3),
		new TaskModel(9, 'Prepare awesome template for your task', 'Prepare awesome template for your task', '01:00 PM', 2),
		new TaskModel(10, 'Work on memory and will power', 'Work on memory and will power', '02:00 PM', 3)
	]
};


