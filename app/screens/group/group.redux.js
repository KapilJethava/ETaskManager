import { connect } from 'react-redux';
import { addGroup, fetchNextPage, filterIcons,  resetFilterState } from '../../actions';
import { GroupComponent } from './group.component';

function mapStateToProps({ iconReducer }, props) {
	return {
		displayedIcons: iconReducer.displayedIcons,
		filteredIcons: iconReducer.filteredIcons,
		filterText: iconReducer.filterText,
		page: iconReducer.page,
		loading: iconReducer.loading,
		selected: iconReducer.selected
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchNextPage: () => dispatch(fetchNextPage()),
		filterIcons: (text) => dispatch(filterIcons(text)),
		addGroup: (group) => dispatch(addGroup(group)),
		resetFilterState: () => dispatch(resetFilterState())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);
