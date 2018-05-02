import React from 'react';
import { Dimensions, View } from 'react-native';

import { GroupTile, FloatingButton, LoadingIndicator, TileListComponent } from '../../components';
import { commonStyles, styleConstant } from '../../commonModules';
import { styles } from './groups.style';
import { GroupsBussiness } from './groups.business';

export class GroupsUI extends GroupsBussiness {
	componentDidMount() {
		this.props.getGroups();
	}

	orientationChanged(e) {
		const groupTileWidth = this.state.groupTileWidth;
		const { width, height } = Dimensions.get('window')
		const isLandScape = width >= height;
		const numOfTiles = Math.floor(width / groupTileWidth);
		const margin = Math.floor((width - numOfTiles * groupTileWidth) / (2 * numOfTiles));
		this.setState({ groupTileWidth, margin, numOfTiles, reloadKey: Math.random() });
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={[commonStyles.flex, styles.commonPadding]}
				onLayout={this.orientationChanged.bind(this)}>
				<TileListComponent
					key={this.state.reloadKey}
					data={this.props.groups}
					numColumns={this.state.numOfTiles}
					loading={this.props.loading}
					renderItem={({ item }) => <GroupTile margin={this.state.margin} group={item} key={item.id} />}
				/>
				<FloatingButton buttonColor={styleConstant.addGroupButtonColor}
					icon={{ name: styleConstant.addGroupIconName, style: commonStyles.actionButtonIcon }}
					onPress={() => navigate('AddGroup', {})} />
			</View>
		);
	}
}
