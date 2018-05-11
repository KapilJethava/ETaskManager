import React from 'react';
import { GroupsUI } from './groups.ui';

export class GroupsComponent extends GroupsUI {
	constructor(props) {
		super(props);
		this.state = {
			numOfTiles: 3,
			margin: 5,
			reloadKey: 1,
			groupTileWidth: 105
		};
	}
	componentWillReceiveProps() {
		this.setState({
			expa: nextProps.likeCount > this.props.likeCount
		});
	}
}
