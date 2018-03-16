import { ICON_ACTION, STORAGE } from '../constants';

export function fetchNextPage() {
	return (dispatch) => {
		dispatch({ type: ICON_ACTION.FETCH_NEXT_PAGE });
	};
}

export function filterIcons(text) {
	return (dispatch) => {
		dispatch({ type: ICON_ACTION.FILTER_ICONS, text });
	};
}

export function selectIcon(iconName) {
	return (dispatch) => {
		dispatch({ type: ICON_ACTION.SELECT_ICON, iconName });
	};
}

