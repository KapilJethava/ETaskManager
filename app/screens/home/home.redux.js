import { connect } from 'react-redux';
import { getGroups } from '../../actions';
import { HomeComponent } from './home.component';

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
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
