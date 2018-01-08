import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabDetailWrapper } from './../tabDetailWrapper/TabDetailWrapper';
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';

export class TaskList extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<TabDetailWrapper>
				<Text style={{ backgroundColor: 'transparent' }}>Task List</Text>
				<ActionButton buttonColor={styleConstant.addTaskButtonColor}
					icon={<Icon name={styleConstant.addTaskIconName} style={commonStyles.actionButtonIcon} />}/>
			</TabDetailWrapper>
		);
	}
}

