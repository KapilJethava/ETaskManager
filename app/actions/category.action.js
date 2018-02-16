import { CATEGORY_ACTION } from '../constants/action.constant'
import { mockData } from '../MockData';

export function getCategories() {
	return (dispatch) => {
		var data = mockData.catList.slice(0);
		mockData.taskList.forEach((tl) => {
			let cId = tl.categoryId;
			let c = data.find((ct) => ct.key === cId);
			if (c) {
				c.taskIds.push(tl.key);
			}
		});
		dispatch({ type: CATEGORY_ACTION.GET_LIST, categories: data });
	};
}
