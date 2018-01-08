import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabDetailWrapper} from './../tabDetailWrapper/TabDetailWrapper'
import { commonStyles, Icon, ActionButton, styleConstant } from './../../commonModules';

export class CategoryList extends React.Component {
	render() {
		return (
			<TabDetailWrapper>
				<Text style={{backgroundColor:'transparent'}}>Category List</Text>
				<ActionButton buttonColor={styleConstant.addCategoryButtonColor}
					icon={<Icon name={styleConstant.addCategoryIconName} style={commonStyles.actionButtonIcon} />} />
			</TabDetailWrapper>
		);
	}
}
