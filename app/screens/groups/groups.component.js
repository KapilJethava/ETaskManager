import React from 'react';
import { ScrollView, View } from 'react-native';

import { GroupTile, FloatingButton, LoadingIndicator, TabWrapperComponent } from '../../components';
import { commonStyles, styleConstant } from '../../commonModules';
import { styles } from './groups.style';

export class GroupsComponent extends React.Component {
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
									<GroupTile group={group} key={group.id} />
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
