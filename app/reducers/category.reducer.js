import { CATEGORY_ACTION } from '../constants/action.constant'
let defaultState = { categories: [], loading: true };

const categoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CATEGORY_ACTION.GET_LIST:
			state = Object.assign({}, state, { categories: action.categories, loading: false });
			return state;
		default:
			return state;
	}
};

export default categoryReducer;
