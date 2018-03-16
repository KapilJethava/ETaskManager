import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import iconReducer from './icon.reducer';

// Combine all the reducers
const rootReducer = combineReducers({
	categoryReducer,
	iconReducer
})

export default rootReducer;
