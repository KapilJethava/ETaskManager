
export class CategoryModel {
	/**
	 * @param {uniqueIdentifier} key - unique identifier for object
	 * @param {string} name - name of the category/tak group
	 * @param {string} iconName - category/task group icon
	 * @param {string<color>} color - color of icon for category
	 * @param {Arra<int>} taskIds - array of all those task Ids where category Id is current category Id
	 */
	constructor(key, name, iconName, color, taskIds = []) {
		this.key = key;
		this.name = name;
		this.iconName = iconName;
		this.color = color;
		this.taskIds = taskIds
	}
	get taskCount() {
		return this.taskIds.length;
	}
}
