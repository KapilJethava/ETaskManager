import _ from 'lodash';
import { CATEGORY_ACTION } from '../constants/action.constant'
let defaultState = { categories: [], loading: true };

const categoryReducer = (state = defaultState, action) => {
	var categories = _.clone(state.categories);;
	var index;
	switch (action.type) {
		case CATEGORY_ACTION.GET_LIST:
			categories = action.categories;
			break;

		case CATEGORY_ACTION.ADD:
			categories.unshift(action.category);
			break;

		case CATEGORY_ACTION.UPDATE:
			index = _.findIndex(categories, c => c.key === action.category.key);
			if (index) {
				categories[index] = _.clone(action.category);
			}
			break;

		case CATEGORY_ACTION.DELETE:
			index = _.findIndex(categories, c => c.key === action.key);
			if (index) {
				categories.splice(index, 0);
			}
			break;

		default:
			break
	}
	state = Object.assign({}, state, { categories: categories, loading: false });
	return state;
};

export default categoryReducer;
