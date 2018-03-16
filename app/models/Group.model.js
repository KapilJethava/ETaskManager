
export class GroupModel {
	/**
	 * @param {uniqueIdentifier} id - unique identifier for object
	 * @param {string} name - name of the group/tak group
	 * @param {string} iconName - group/task group icon
	 * @param {string<color>} color - color of icon for group
	 * @param {Arra<int>} taskIds - array of all those task Ids where group Id is current group Id
	 */
	constructor(id = 0, name = '', iconName = '', color = '', taskIds = []) {
		this.id = id;
		this.name = name;
		this.iconName = iconName;
		this.color = color;
		this.taskIds = taskIds
	}
	get taskCount() {
		return this.taskIds.length;
	}
}
