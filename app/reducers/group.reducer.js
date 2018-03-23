import _ from 'lodash';
import { GROUP_ACTION } from '../constants/action.constant'
let defaultState = { groups: [], loading: true };

const groupReducer = (state = defaultState, action) => {
	var groups = _.clone(state.groups);;
	var index;
	switch (action.type) {
		case GROUP_ACTION.GET_LIST:
			groups = action.groups;
			break;

		case GROUP_ACTION.ADD:
			groups.push(action.group);
			break;

		case GROUP_ACTION.UPDATE:
			index = _.findIndex(groups, c => c.id === action.group.id);
			if (index) {
				groups[index] = _.clone(action.group);
			}
			break;

		case GROUP_ACTION.DELETE:
			index = _.findIndex(groups, c => c.id === action.id);
			if (index) {
				groups.splice(index, 0);
			}
			break;

		default:
			break
	}
	state = Object.assign({}, state, { groups, loading: false });
	return state;
};

export default groupReducer;
