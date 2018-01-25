import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { _, commonStyles, Icon, ActionButton, styleConstant, categoryColors, iconNames } from './../../commonModules';
import { FadeIn } from './../core/animations';

export class AddCategoryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.iconList = _.clone(Object.keys(iconNames));
		this.state = {
			catName:'',
			color: '',
			iconName: '',
			iconSearchText: '',
			filteredIcons: this.iconList
		};

	}
	static navigationOptions = ({ navigation }) => ({
		headerRight:(<TouchableOpacity>
			<Text style={{ color: '#fff' }} >Add</Text>
		</TouchableOpacity>),
	});

	filterIcons = (iconSearchText) => {
		let searTerm = "";
		if(iconSearchText && iconSearchText.length > 0)
			searTerm = iconSearchText.trim().toLowerCase();

		this.setState({ iconSearchText });
		const filteredIcons = (iconSearchText.trim().length > 0)
			? _.filter(this.iconList, (item) => { return item.toLowerCase().indexOf(searTerm) !== -1})
			: this.iconList
		this.setState({filteredIcons});
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={[commonStyles.flex, commonStyles.generalBG]}>
				<View style={styles.fieldContainer}>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(catName) => this.setState({ catName })}
						value={this.state.catName}
					/>
					{/* <Text style={{ color: '#000' }}>{this.state.catName}</Text>
					<Text style={{ color: '#000' }}>{this.state.color}</Text>
					<Text style={{ color: '#000' }}>{this.state.iconName}</Text> */}
				</View>

				<View style={commonStyles.flex}>

				<View style={[commonStyles.flex, styles.fieldContainer]}>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(text) => { this.filterIcons(text)}}
						value={this.state.iconSearchText}
					/>
					<ScrollView>
						<View style={[styles.tilesContainer]}>
							{
								this.state.filteredIcons.map((iconName) =>
									<TouchableHighlight onPress={() => this.setState({ iconName })}>
										<View style={styles.iconTile}>
											<FadeIn duration={400}>
												<Icon name={iconName} style={styles.icon} />
											</FadeIn>
										</View>
									</TouchableHighlight>
								)
							}
						</View>
					</ScrollView>
				</View>

				{
					(this.state.iconName && this.state.iconName.trim().length != 0)
					?
						<View style={[commonStyles.flex, styles.fieldContainer]}>
							<ScrollView>
								<View style={styles.tilesContainer}>
									{
										categoryColors.map((color) =>
											<TouchableHighlight onPress={() => this.setState({ color })}>
												<View style={[styles.iconTile, { borderColor: color }]}>
													<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: color }]}></View>
													<Icon name={this.state.iconName} style={[styles.icon, { color: color }]} />
													{
														(this.state.color && this.state.color === color)
															?
															<View style={[commonStyles.topRightCorner]}>
																<FadeIn duration={400}>
																	<Icon name="check" style={{ color: '#fff', fontSize: 35, padding: 3 }} />
																</FadeIn>
															</View>
															: null
													}
												</View>
											</TouchableHighlight>
										)
									}
								</View>
							</ScrollView>
						</View>
					: null
				}
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	fieldContainer: {
		padding: 7,
		marginBottom: 8
	},
	headerButton: {
		color: styleConstant.textColor,
		borderWidth: 1,
		borderColor: '#dedede',
		borderRadius: 3,
	},
	tilesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#dedede',
		justifyContent: 'flex-start'
	},
	colorTile: {
		width: 65,
		height: 65,
		margin: 2,
		borderRadius:2
	},
	icon: {
		fontSize: 38,
		color: '#aaa',
		alignSelf: 'center',
	},
	iconTile: {
		margin: 2,
		width: 65,
		height: 65,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#dedede',
		justifyContent: 'center'
	}
});
