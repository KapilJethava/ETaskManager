import { CATEGORY_ACTION, STORAGE } from '../constants'
import { mockData } from '../MockData';
import { getItem, setItem } from '../utility';

export function getCategories() {
	return (dispatch) => {
		getItem(STORAGE.CATEGORIES, (err, categories) => {
			if (categories == null) { // Set default categories to device storage for future use
				categories = mockData.catList;
				mockData.taskList.forEach((tl) => {
					let cId = tl.categoryId;
					let c = categories.find((ct) => ct.key === cId);
					if (c) {
						c.taskIds.push(tl.key);
					}
				});
				setItem(STORAGE.CATEGORIES, categories);
			}
			dispatch({ type: CATEGORY_ACTION.GET_LIST, categories: categories });
		});
	};
}

export function addCategory(category) {
	return (dispatch) => {
		getItem(STORAGE.CATEGORIES, (err, categories) => {
			categories.unshift(category);
			setItem(STORAGE.CATEGORIES, categories, () => {
				dispatch({ type: CATEGORY_ACTION.ADD, category: category });
			});
		});
	};
}
export function updateCategory(category) {
	return (dispatch) => {
		getItem(STORAGE.CATEGORIES, (err, categories) => {
			var cat = categories.find(c => c.key === category.key);
			if (cat) {
				cat = category.slice(0);
			}
		});
		dispatch({ type: CATEGORY_ACTION.UPDATE, category: category });
	};
}
export function deleteCategory(key) {
	return (dispatch) => {
		getItem(STORAGE.CATEGORIES, (err, categories) => {
			var index = categories.findIndex(c => c.key === key);
			if (index !== -1) {
				categories.splice(index,1);
			}
		});
		dispatch({ type: CATEGORY_ACTION.GET_LIST, key: key });
	};
}
