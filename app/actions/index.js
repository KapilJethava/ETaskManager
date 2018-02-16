export const GET_CATEGORIES = 'GET_CATEGORIES';
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
		dispatch({ type: GET_CATEGORIES, categories: data });
	};
}
