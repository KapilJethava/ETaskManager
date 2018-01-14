import { priorityEnum } from './../commonModules';

export class TaskModel {
	/**
	 *
	 * @param {uniqueIdentifier} key : uniqueIdentifier for task object
	 * @param {string} title - title of the task
	 * @param {string} desc - description of the task
	 * @param {datetime} time - time where the task should be notified
	 * @param {enum} priority - priority of task like High/Medium/Low/None
	 * @param {integer} catId - category Id of category associated with task
	 */
	constructor(key, title, desc, time, priority, catId = 0) {
		this.key = key;
		this.title = title;
		this.description = desc;
		this.time = time;
		this.priorityKey = priority;
		this.categoryId = catId;
	}
	get priority() {
		return priorityEnum[this.priorityKey];
	}
	set priority(value) {
		this.priorityKey = value;
	}
}

