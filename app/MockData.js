import {CategoryModel, TaskModel} from './models';

export const mockData = {
	catList: [
		new CategoryModel(1, 'Home', 'home', 'rgb(66, 133, 244)'),
		new CategoryModel(2, 'Work', 'work', 'rgb(235, 67, 53)'),
		new CategoryModel(3, 'Call', 'call', 'rgb(52, 168, 83)'),
		new CategoryModel(4, 'Billing', 'payment', '#E91E63'),
		new CategoryModel(5, 'Home', 'home', '#00695C'),
		new CategoryModel(6, 'Work', 'work', '#424242'),
		new CategoryModel(7, 'Call', 'call', '#37474F'),
		new CategoryModel(8, 'Billing', 'payment', '#D84315')
	],
	taskList: [
		new TaskModel(1, 'Pick your son from school', 'Pick your son from school', '10:00 AM', 1, 1),
		new TaskModel(2, 'Email details to client', 'Email details to client', '10:15 AM', 2, 1),
		new TaskModel(3, 'Followup with XYZ client', 'Followup with XYZ client', '10:20 AM', 3, 2),
		new TaskModel(4, 'Pay Electricity bill', 'Pay Electricity bill', '11:00 AM', 1, 3),
		new TaskModel(5, 'Search the best tag line for app', 'Search the best tag line for app', '11:10 AM', 1, 4),
		new TaskModel(6, 'Demonstrate your application to Simon', 'Demonstrate your application to Simon', '12:00 AM', 0, 5),
		new TaskModel(7, 'Push all application code to git', 'Push all application code to git', '12:10 PM', 2, 2),
		new TaskModel(8, 'Manage CRUD for tasks', 'Manage CRUD for tasks', '12:30 PM', 3, 7),
		new TaskModel(9, 'Prepare awesome template for your task', 'Prepare awesome template for your task', '01:00 PM', 2,3),
		new TaskModel(10, 'Work on memory and will power', 'Work on memory and will power', '02:00 PM', 3, 4)
	]
};
