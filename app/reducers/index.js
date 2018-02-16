import { combineReducers } from 'redux';

import { GET_CATEGORIES } from "../actions/" //Import the actions types constant we defined in our actions

let defaultState = { categories: [], loading: true };

const categoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			state = Object.assign({}, state, { categories: action.categories, loading: false });
			return state;
		default:
			return state;
	}
};

// Combine all the reducers
const rootReducer = combineReducers({
	categoryReducer,
	// ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
