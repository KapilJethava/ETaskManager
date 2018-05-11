import React from 'react';
import { Dimensions, View, Text, Animated } from 'react-native';
import { styles } from './home.style';
import { GroupTile, TileListComponent, SelectedGroup } from '../../components';
import { HomeBusiness } from './home.business';
import { ExpandCollapse } from '../../statefull';
import { commonStyles } from '../../commonModules';

export class HomeUI extends HomeBusiness {
	componentDidMount() {
		this.props.getGroups();
	}

	orientationChanged(e) {
		const groupTileWidth = this.state.groupTileWidth;
		const { width, height } = Dimensions.get('window');
		const isLandScape = width >= height;
		const numOfTiles = Math.floor(width / groupTileWidth);
		const margin = Math.floor((width - numOfTiles * groupTileWidth) / (2 * numOfTiles));
		this.setState({ groupTileWidth, margin, numOfTiles, isLandScape, reloadKey: Math.random() });
	}
	renderGroups() {
		if (!this.state.expanded) {
			return (
				this.state.selectedGroup?
				<View style={[commonStyles.flex, commonStyles.fRow]}>
					<SelectedGroup group={this.state.selectedGroup} />
					<View style={styles.sOtherGrpCntnr}>

					</View>
				</View>
				:
				<View>
					<Text>No Group Selected</Text>
				</View>
			);
		}
		return (
			<TileListComponent
				key={this.state.reloadKey}
				data={this.props.groups}
				numColumns={this.state.numOfTiles}
				loading={this.props.loading}
				renderItem={({ item }) => <GroupTile selectGroup={(group) => this.groupSelected(group)} margin={this.state.margin} group={item} key={item.id} />}
			/>
		);
	};

	groupSelected(selectedGroup){
		this.setState({ selectedGroup});
		this.expandControl.expandCollapse();
	}

	renderTasks() {
		return (
			<View>
				<Text onPress={() => this.setState({ expanded: !this.state.expanded })}>AAAA</Text>
			</View>
		);
	};

	render() {
		return (
			<View style={commonStyles.flex}
				onLayout={(e) => this.orientationChanged(e)}>
				<ExpandCollapse
					onRef={ref => this.expandControl = ref}
					isLandScape={this.state.isLandScape}
					expanded={this.state.expanded}
					onButtonClicked={(expanded) => this.setState({ expanded })}
					renderFrame1={() => this.renderGroups()}
					renderFrame2={() => this.renderTasks()} />
			</View>
		);
	}
}
