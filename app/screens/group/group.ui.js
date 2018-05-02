import React from 'react';
import { Button, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { colorsForGroups, commonStyles, Icon, styleConstant, Utility } from '../../commonModules';
import { styleParams, styles } from './group.style';
import { FadeIn } from '../../animations';

import { InputComponent, TileListComponent, IconTile, ColorTile } from '../../components';
import { GroupBusiness } from './group.bussiness';

export class GroupUI extends GroupBusiness {
	orientationChanged= (e) => {
		const { width, height } = Dimensions.get('window')
		const isLandScape = width >= height;
		styleParams.layoutWidth = !isLandScape || this.state.iconName == ''? width : Math.round((width-7)/2);
		const { tileWidth, numOfTiles } = Utility.getItemParams(styleParams);
		this.setState({ isLandScape, tileWidth, numOfTiles, reloadKey: Math.random()});
		console.log(tileWidth, isLandScape, numOfTiles )
	}

	iconSelected = (iconName) => {
		this.setState({ iconName });
		this.orientationChanged();
	};

	renderIconTile = (iconName) => {
		const color = this.state.iconName === iconName ? styleConstant.themeColor : '#888';
		return (<IconTile color={color} iconName={iconName} onPress={() => this.iconSelected(iconName)}
			containerStyle={[styles.iconTile, {width:this.state.tileWidth, height:this.state.tileWidth}]}
			iconStyle={styles.icon} />);
	};

	renderColorTile = (color) => {
		return (
			<ColorTile onPress={() => this.setState({ color })} iconStyle={styles.icon}
				containerStyle={[styles.iconTile, { width: this.state.tileWidth, height: this.state.tileWidth }]}
				color={color} iconName={this.state.iconName} selectedColor={this.state.color} />
		);
	}

	render() {
		return (
			<View style={[commonStyles.flex, styles.fcolumn, styles.commonPadding]}
				onLayout={this.orientationChanged.bind(this)}>
				{/* Background image which is stretched to full screen */}
				<Image source={require('../../assets/images/bg.png')}
					style={[{ opacity: 0.3 }, commonStyles.stretchToParent]} />

				{/* Group Name text box */}
				<View style={[styles.commonPadding]}>
					<InputComponent onTextChange={(groupName) => this.setState({ groupName })}
						value={this.state.groupName}
						placeholder={'Group Name'} />
				</View>

				<View style={[commonStyles.flex, { flexDirection: this.state.isLandScape ? 'row': 'column' }]}>
					<View style={[commonStyles.flex, this.state.isLandScape ? styles.marginRight : styles.marginBottom, styles.fcolumn]}>
						{/* Icon's search text box */}
						<View style={[styles.commonPadding]}>
							<InputComponent showIcon={true}
								onTextChange={(text) => this.props.filterIcons(text)}
								value={this.props.filterText}
								placeholder={'Search Icon'} />
						</View>

						{/* List of icons  */}
						<TileListComponent
							key={this.state.reloadKey}
							renderItem={({ item }) => this.renderIconTile(item)}
							data={this.props.displayedIcons}
							onEndReached={this.fetchIcons}
							numColumns={this.state.numOfTiles}
							loading={this.props.loading}
							/>
					</View>
					{
						(this.state.iconName && this.state.iconName.trim().length != 0)
							?
							<TileListComponent
								key={this.state.reloadKey}
								renderItem={({ item }) => this.renderColorTile(item)}
								data={colorsForGroups}
								numColumns={this.state.numOfTiles}
							/>
							: null
					}
				</View>
			</View>
		);
	}
}
