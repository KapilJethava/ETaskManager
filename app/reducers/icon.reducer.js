import { ICON_ACTION, Values } from '../constants';
import { _, iconList } from '../commonModules';
const defaultState = {
	displayedIcons: [],
	filteredIcons: [...iconList],
	filterText: '',
	page: 0,
	loading: true,
	selected: ''
};

const iconReducer = (state = _.cloneDeep(defaultState), action) => {
	var filteredIcons = state.filteredIcons;
	var page = state.page;
	var displayedIcons = state.displayedIcons;
	var filterText = state.filterText;
	var selected = state.selected;

	function setToNextPage() {
		const startIndex = page * Values.ICONS_PER_PAGE;
		const icons = _.slice(filteredIcons, startIndex, startIndex + Values.ICONS_PER_PAGE);

		page = page + 1;
		displayedIcons = [...displayedIcons, ...icons];
	}

	switch (action.type) {
		case ICON_ACTION.FETCH_NEXT_PAGE:
			//	this.setState({ iconLoading: true });
			setToNextPage();
			break;

		case ICON_ACTION.FILTER_ICONS:
			//	this.setState({ iconLoading: true });
			page = 0;
			displayedIcons = [];

			let searTerm = "";
			filterText = action.text;
			if (action.text && action.text.length > 0) {
				searTerm = action.text.trim().toLowerCase();
			}

			filteredIcons = (searTerm.length > 0)
				? _.filter(iconList, (item) => { return item.toLowerCase().indexOf(searTerm) !== -1 })
				: [...iconList];

			setToNextPage();
			break;
		case ICON_ACTION.SELECT_ICONS:
			selected = action.iconName;
			break;

		case ICON_ACTION.RESET_STATE:
			filterText = '';
			break;

		default:
			break
	}
	state = action.type === ICON_ACTION.RESET_STATE ?
		defaultState :
		{ displayedIcons, filteredIcons, filterText, page, loading: false, selected };

	return state;
};

export default iconReducer;
