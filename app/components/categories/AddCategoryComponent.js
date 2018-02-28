import React, { Component } from 'react';
import { Image, ScrollView, Text, View, StyleSheet, Button, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { _, commonStyles, Icon, ActionButton, styleConstant, categoryColors, iconNames, layoutAttrib } from './../../commonModules';
import { FadeIn } from './../core/animations';
import { InputComponent } from './../core';

export class AddCategoryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.iconList = _.clone(Object.keys(iconNames));
		this.state = {
			catName: '',
			color: '',
			iconName: '',
			iconSearchText: '',
			filteredIcons: this.iconList
		};
	}
	static navigationOptions = ({ navigation }) => ({
		headerRight: (<TouchableHighlight>
			<View style={styles.headerButton}>
				<Text style={{ color: '#fff' }} >Add</Text>
			</View>
		</TouchableHighlight>),
	});

	filterIcons = (iconSearchText) => {
		let searTerm = "";
		if (iconSearchText && iconSearchText.length > 0)
			searTerm = iconSearchText.trim().toLowerCase();

		this.setState({ iconSearchText });
		const filteredIcons = (iconSearchText.trim().length > 0)
			? _.filter(this.iconList, (item) => { return item.toLowerCase().indexOf(searTerm) !== -1 })
			: this.iconList
		this.setState({ filteredIcons });
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={[commonStyles.flex, styles.fcolumn, styles.commonPadding]}>
				<Image source={require('./../../assets/images/bg.png')}
					style={[{ opacity: 0.3 }, commonStyles.stretchToParent]} />
				<View style={[styles.commonPadding]}>
					<InputComponent onTextChange={(catName) => this.setState({ catName })}
									value={this.state.catName}
									placeholder={'Category Name'}/>
					{/* <TextInput
						underlineColorAndroid='transparent'
						autoCorrect={false}
						style={[commonStyles.textBox, commonStyles.generalBG, commonStyles.borderAll]}
						onChangeText={(catName) => this.setState({ catName })}
						placeholder={'Category Name'}
						value={this.state.catName}
					/> */}
				</View>

				<View style={[commonStyles.flex]}>
					<View style={[commonStyles.flex, styles.marginBottom, styles.fcolumn]}>
						<View style={[styles.commonPadding]}>
							<InputComponent showIcon={true}
									onTextChange={(text)=>this.filterIcons(text)}
									value={this.state.iconSearchText}
									placeholder={'Search Icon'}/>
						</View>
						<View style={[commonStyles.flex, styles.noPadTop, commonStyles.borderAll]}>
							<ScrollView>
								<View style={[styles.tilesContainer]}>
									{
										this.state.filteredIcons.map((iconName) =>
											<TouchableHighlight onPress={() => this.setState({ iconName })}>
												<View style={[styles.iconTile, commonStyles.generalBG]}>
													<Icon name={iconName} style={styles.icon} />
												</View>
											</TouchableHighlight>
										)
									}
								</View>
							</ScrollView>
						</View>
					</View>

					{
						(this.state.iconName && this.state.iconName.trim().length != 0)
							?
							<View style={[commonStyles.flex, commonStyles.borderAll]}>
								<ScrollView>
									<View style={[styles.tilesContainer, {alignSelf:'center'}]}>
										{
											categoryColors.map((color) =>
												<TouchableHighlight onPress={() => this.setState({ color })}>
													<View style={[styles.iconTile, { borderColor: color }]}>
														<View style={[commonStyles.generalBG, commonStyles.stretchToParent]} />
														<View style={[commonStyles.stretchToParent, commonStyles.catBgOpacity, { backgroundColor: color }]}></View>
														<Icon name={this.state.iconName} style={[styles.icon, { color: color }]} />
														{
															(this.state.color && this.state.color === color)
																?
																<View style={[commonStyles.topRightCorner]}>
																	<FadeIn duration={400}>
																		<Icon name="check" style={{ color: 'red', fontSize: 40 }} />
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
const width = (layoutAttrib.width - 46) / 5;
const styles = StyleSheet.create({
	fcolumn: {
		flexDirection: 'column',
	},
	commonPadding: {
		padding: 7
	},
	marginBottom: {
		marginBottom:7
	},
	noPadTop: {
		paddingTop: 0
	},
	headerButton: {
		color: styleConstant.textColor,
		borderWidth: 1,
		borderColor: '#dedede',
		borderRadius: 2,
		padding:2,
		marginRight:10
	},
	tilesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding:3,
		justifyContent: 'flex-start'
	},
	icon: {
		fontSize: 38,
		color: '#888',
		alignSelf: 'center',
	},
	iconTile: {
		margin: 2,
		width: width,
		height: width,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: '#dedede',
		justifyContent: 'center'
	}
});
