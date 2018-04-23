import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { colorsForGroups, commonStyles, Icon, styleConstant, Utility } from '../../commonModules';
import { numOfTiles, styles } from './group.style';
import { FadeIn } from '../../animations';

import { InputComponent, TileListComponent, IconTile } from '../../components';
import { GroupBusiness } from './group.bussiness';

export class GroupUI extends GroupBusiness{
	renderIconTile = (iconName) => {
		const color = this.state.iconName === iconName ? styleConstant.themeColor : '#888';
		return (<IconTile color={color} iconName={iconName} onPress={() => this.setState({ iconName })}
			containerStyle={styles.iconTile} iconStyle={styles.icon} />);
	};

	renderColorTile = (color) => {
		return (
			<TouchableOpacity onPress={() => this.setState({ color })}>
				<View style={[styles.iconTile, { borderColor: color }]}>
					<View style={[commonStyles.generalBG, commonStyles.stretchToParent]} />
					<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: color }]}></View>
					<Icon name={this.state.iconName} style={[styles.icon, { color: color }]} />
					{
						(this.state.color && this.state.color === color)
							?
							<View style={[commonStyles.topRightCorner]}>
								<FadeIn duration={400}>
									<Icon name="check" style={{ backgroundColor: 'transparent', color: 'red', fontSize: 40 }} />
								</FadeIn>
							</View>
							: null
					}
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={[commonStyles.flex, styles.fcolumn, styles.commonPadding]}>
				{/* Background image which is stretched to full screen */}
				<Image source={require('../../assets/images/bg.png')}
					style={[{ opacity: 0.3 }, commonStyles.stretchToParent]} />

				{/* Group Name text box */}
				<View style={[styles.commonPadding]}>
					<InputComponent onTextChange={(groupName) => this.setState({ groupName })}
						value={this.state.groupName}
						placeholder={'Group Name'} />
				</View>

				<View style={[commonStyles.flex]}>
					<View style={[commonStyles.flex, styles.marginBottom, styles.fcolumn]}>
						{/* Icon's search text box */}
						<View style={[styles.commonPadding]}>
							<InputComponent showIcon={true}
								onTextChange={(text) => this.props.filterIcons(text)}
								value={this.props.filterText}
								placeholder={'Search Icon'} />
						</View>

						{/* List of icons  */}
						<TileListComponent
							renderItem={({ item }) => this.renderIconTile(item)}
							data={this.props.displayedIcons}
							onEndReached={this.fetchIcons}
							numColumns={numOfTiles}
							loading={this.props.loading} />
					</View>
					{
						(this.state.iconName && this.state.iconName.trim().length != 0)
							?
							<TileListComponent
								renderItem={({ item }) => this.renderColorTile(item)}
								data={colorsForGroups}
								numColumns={numOfTiles}
							/>
							: null
					}
				</View>
			</View>
		);
	}
}

