import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';

import { GroupTileComponent, FloatingButton, LoadingIndicator, TabWrapperComponent } from '../../components';
import { commonStyles, styleConstant } from '../../commonModules';
import { getGroups } from '../../actions';
import { styles } from './groups.style';

class GroupsComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getGroups(); //call our action
	}

	render() {
		const { navigate } = this.props.navigation;
		if (this.props.loading) {
			return (<LoadingIndicator />);
		} else {
			return (
				<TabWrapperComponent>
					<ScrollView>
						<View style={styles.groupsContainer}>
							{
								this.props.groups.map((group) =>
									<GroupTileComponent group={group} key={group.id} />
								)
							}
						</View>
					</ScrollView>
					<FloatingButton buttonColor={styleConstant.addGroupButtonColor}
						icon={{name:styleConstant.addGroupIconName, style: commonStyles.actionButtonIcon}}
						onPress={() => navigate('AddGroup', {}) } />
				</TabWrapperComponent>
			);
		}
	}
}
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

