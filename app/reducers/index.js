import { combineReducers } from 'redux';
import groupReducer from './group.reducer';
import iconReducer from './icon.reducer';
import taskReducer from './task.reducer';

// Combine all the reducers
const rootReducer = combineReducers({
	groupReducer,
	iconReducer,
	taskReducer
});

export default rootReducer;
