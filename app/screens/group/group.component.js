import React from 'react';

import { Button, Image, Text, TouchableOpacity, View } from 'react-native';

import { colorsForGroups, commonStyles, Icon, styleConstant, Utility } from '../../commonModules';
import { numOfTiles, styles } from './group.style';
import { FadeIn } from '../../animations';

import { InputComponent, TileListComponent } from '../../components';
import { GroupModel } from '../../models';


export class GroupComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groupName: this.props.group.name,
			color: this.props.group.color,
			iconName: this.props.group.iconName
		};
		this.groupId = this.props.group.id;
		this.props.filterText = '';
	}

	static defaultProps = {
		group: new GroupModel()
	}

	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<TouchableOpacity onPress={() => { navigation.state.params.save() }}>
				<View style={styles.headerButton}>
					<Text style={{ color: '#fff' }} > ADD </Text>
				</View>
			</TouchableOpacity>),

	});

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

	renderIconTile = (iconName) => {
		const color = this.state.iconName === iconName ? styleConstant.themeColor : '#888';
		//const selected = this.props.selected === iconName?styles.selected:null;
		return (
			<TouchableOpacity onPress={() => this.setState({ iconName })}>
				<View style={[styles.iconTile, commonStyles.generalBG, { borderColor: color }]}>
					<Icon name={iconName} style={[styles.icon, { color: color }]} />
				</View>
			</TouchableOpacity>
		);
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

	fetchIcons = () => {
		this.props.fetchNextPage();
	};

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

