
export class CategoryModel {
	/**
	 * @param {uniqueIdentifier} id - unique identifier for object
	 * @param {string} name - name of the category/tak group
	 * @param {string} iconName - category/task group icon
	 * @param {string<color>} color - color of icon for category
	 * @param {Arra<int>} taskIds - array of all those task Ids where category Id is current category Id
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
