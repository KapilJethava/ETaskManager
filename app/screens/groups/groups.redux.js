import { connect } from 'react-redux';
import { GroupsComponent } from './groups.component';
import { getGroups } from '../../actions';

function mapStateToProps({ groupReducer }, props) {
	return {
		groups: groupReducer.groups,
		loading: groupReducer.loading
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getGroups: () => dispatch(getGroups())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupsComponent);
