import { TASK_ACTION, STORAGE } from '../constants'
import { mockData } from '../MockData';
import { getItem, setItem } from '../utility';

export function getTasksAndGroups() {
	return (dispatch) => {
		getItem(STORAGE.GROUPS, (err, groups) => {
			if (groups == null) { // Set default groups to device storage for future use
				groups = mockData.groups;
				mockData.taskList.forEach((tl) => {
					let gId = tl.groupId;
					let g = groups.find((grp) => grp.id === gId);
					if (g) {
						g.taskIds.push(tl.id);
					}
				});
				setItem(STORAGE.GROUPS, groups);
			}
			getItem(STORAGE.TASKS, (err, tasks) => {
				if (tasks == null) {
					tasks = mockData.taskList;
					setItem(STORAGE.TASKS, tasks);
				}
				dispatch({ type: TASK_ACTION.GET_TASKS_GROUPS, tasks, groups });
			});
		});
	};
}
