import React from 'react';
import { GroupModel } from '../../models';

export class GroupBusiness extends React.Component{
	save = () => {
		var state = this.state;
		var group = new GroupModel(this.groupId, state.groupName.trim(), state.iconName, state.color);
		var msg = this.validateGroup(group);

		if (msg.length === 0) {
			this.props.addGroup(group);
			this.props.resetFilterState();
			this.props.navigation.goBack();
		} else {
			Utility.alertForInvalidValue(msg);
		}
	}

	validateGroup = (group) => {
		let errMsg = '';
		const groupNameRegex = /^[a-zA-Z0-9]{0, }$/;
		if (group.name.length === 0) {
			errMsg = 'Please enter a valid group name.';
		} else if (groupNameRegex.test(group.name)) {
			errMsg = 'Only alpha numeric characters are allowed as a group name';
		} else if (group.iconName.length === 0) {
			errMsg = "Please select an icon for your group";
		} else if (group.color.length === 0) {
			errMsg = 'Please select some color tile for your group';
		}
		return errMsg;
	};

	componentDidMount = () => {
		this.props.navigation.setParams({
			save: this.save.bind(this)
		});
		this.props.fetchNextPage(); //call our action
	};

	fetchIcons = () => {
		this.props.fetchNextPage();
	};
}

