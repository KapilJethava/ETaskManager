import { combineReducers } from 'redux';
import groupReducer from './group.reducer';
import iconReducer from './icon.reducer';

// Combine all the reducers
const rootReducer = combineReducers({
	groupReducer,
	iconReducer
})

export default rootReducer;
