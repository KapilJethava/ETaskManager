import { priorityEnum } from './../commonModules';

export class TaskModel {
	/**
	 *
	 * @param {uniqueIdentifier} id : uniqueIdentifier for task object
	 * @param {string} title - title of the task
	 * @param {string} desc - description of the task
	 * @param {datetime} time - time where the task should be notified
	 * @param {enum} priority - priority of task like High/Medium/Low/None
	 * @param {integer} groupId - group Id of group associated with task
	 */
	constructor(id, title, desc, time, priority, groupId = 0) {
		this.id = id;
		this.title = title;
		this.description = desc;
		this.time = time;
		this.priorityKey = priority;
		this.groupId = groupId;
	}
	get priority() {
		return priorityEnum[this.priorityKey];
	}
	set priority(value) {
		this.priorityKey = value;
	}
}

