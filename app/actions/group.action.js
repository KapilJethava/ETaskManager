import { GROUP_ACTION, STORAGE } from '../constants'
import { mockData } from '../MockData';
import { getItem, setItem } from '../utility';

export function getGroups() {
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
			dispatch({ type: GROUP_ACTION.GET_LIST, groups });
		});
	};
}

export function addGroup(group) {
	return (dispatch) => {
		getItem(STORAGE.GROUPS, (err, groups) => {
			groups.unshift(group);
			setItem(STORAGE.GROUPS, groups, () => {
				dispatch({ type: GROUP_ACTION.ADD, group: group });
			});
		});
	};
}
export function updateGroup(group) {
	return (dispatch) => {
		getItem(STORAGE.GROUPS, (err, groups) => {
			var grp = groups.find(c => c.id === group.id);
			if (grp) {
				grp = group.slice(0);
			}
		});
		dispatch({ type: GROUP_ACTION.UPDATE, group: group });
	};
}
export function deleteGroup(id) {
	return (dispatch) => {
		getItem(STORAGE.GROUPS, (err, groups) => {
			var index = groups.findIndex(c => c.id === id);
			if (index !== -1) {
				groups.splice(index,1);
			}
		});
		dispatch({ type: GROUP_ACTION.GET_LIST, id: id });
	};
}
