import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';

// Combine all the reducers
const rootReducer = combineReducers({
	categoryReducer,
})

export default rootReducer;
