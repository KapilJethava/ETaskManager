import React from 'react';
import { GroupUI } from './group.ui';
import { GroupModel } from '../../models';
import { HeaderButton } from '../../components';

export class GroupComponent extends GroupUI {
	constructor(props) {
		super(props);
		this.state = {
			groupName: this.props.group.name,
			color: this.props.group.color,
			iconName: this.props.group.iconName,
			reloadKey: 0,
			numOfTiles: 5
		};
		this.groupId = this.props.group.id;
		this.props.filterText = '';
	}

	static defaultProps = {
		group: new GroupModel()
	}
	static navigationOptions = ({ navigation }) => ({
		headerRight: <HeaderButton onPress={() => { navigation.state.params.save() }} />
	});

	componentDidMount = () => {
		this.props.navigation.setParams({
			save: this.save.bind(this)
		});
		this.props.fetchNextPage(); //call our action
	};
}

