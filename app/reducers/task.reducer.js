import _ from 'lodash';
import { TASK_ACTION } from '../constants/action.constant'
let defaultState = { tasks: [], groups: [], loading: true };

const taskReducer = (state = defaultState, action) => {
	var tasks = state.tasks;
	var groups = state.groups;
	var index;
	switch (action.type) {
		case TASK_ACTION.GET_TASKS_GROUPS:
			tasks = action.tasks;
			groups = action.groups;
			break;

		// case TASK_ACTION.ADD:
		// 	tasks.unshift(action.task);
		// 	break;

		// case TASK_ACTION.UPDATE:
		// 	index = _.findIndex(tasks, t => t.id === action.task.id);
		// 	if (index) {
		// 		tasks[index] = _.clone(action.task);
		// 	}
		// 	break;

		// case TASK_ACTION.DELETE:
		// 	index = _.findIndex(tasks, t => t.id === action.id);
		// 	if (index) {
		// 		tasks.splice(index, 0);
		// 	}
		// 	break;

		default:
			break
	}
	state = Object.assign({}, state, { tasks, groups, loading: false });
	return state;
};

export default taskReducer;
