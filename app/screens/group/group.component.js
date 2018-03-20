import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Button, TouchableOpacity } from 'react-native';

import { _, commonStyles, Icon, styleConstant, colorsForGroups } from '../../commonModules';
import { FadeIn } from '../../animations';
import { InputComponent } from '../../components';
import { styles, numOfTiles } from './group.style';
import { GroupModel } from '../../models';
import { fetchNextPage, filterIcons } from '../../actions';
import { TileListComponent } from '../../components';

class GroupComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groupName: this.props.group.name,
			color: this.props.group.color,
			iconName: this.props.group.iconName
		};
	}

	static defaultProps = {
		group: new GroupModel()
	}

	componentDidMount = () => {
		this.props.fetchNextPage(); //call our action
	};

	renderIconTile = (icon) => {
		const iconName = icon.item;
		const color = this.state.iconName === iconName ? styleConstant.themeColor: '#888';
		//const selected = this.props.selected === iconName?styles.selected:null;
		return (
			<TouchableOpacity onPress={() => this.setState({ iconName })}>
				<View style={[styles.iconTile, commonStyles.generalBG, {borderColor: color}]}>
					<Icon name={iconName} style={[styles.icon, {color: color }]} />
				</View>
			</TouchableOpacity>
		);
	};

	renderColorTile = (listitem) => {
		const color = listitem.item;
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

	fetchIcons = () => {
		this.props.fetchNextPage();
	};

	render(){
		const { navigate } = this.props.navigation;
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
							renderItem={this.renderIconTile}
							data={this.props.displayedIcons}
							onEndReached={this.fetchIcons}
							numColumns={numOfTiles}
							loading={this.props.loading}/>
					</View>
					{
						(this.state.iconName && this.state.iconName.trim().length != 0)
							?
							<TileListComponent
								renderItem={this.renderColorTile}
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
function mapStateToProps({ iconReducer }, props) {
	return {
		displayedIcons: iconReducer.displayedIcons,
		filteredIcons: iconReducer.filteredIcons,
		filterText: iconReducer.filterText,
		page: iconReducer.page,
		loading: iconReducer.loading,
		selected: iconReducer.selected
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchNextPage: () => dispatch(fetchNextPage()),
		filterIcons: (text) => dispatch(filterIcons(text))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);
