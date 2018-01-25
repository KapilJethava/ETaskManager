import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { commonStyles, Icon, ActionButton, styleConstant, categoryColors, iconNames } from './../../commonModules';
//import { Fade } from './../core/anima';

export class AddCategoryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catName:'',

			color: '',
			iconName: ''
		};
	}
	static navigationOptions = ({ navigation }) => ({
		headerRight: <TouchableOpacity><Text style={{ color: '#fff' }} >Add</Text></TouchableOpacity>,
	});

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
					<Text style={{ color: '#000' }}>{this.state.catName}</Text>
					<Text style={{ color: '#000' }}>{this.state.color}</Text>
					<Text style={{ color: '#000' }}>{this.state.iconName}</Text>
				</View>

				<View style={[commonStyles.flex, styles.fieldContainer]}>
					<ScrollView>
						<View style={styles.tilesContainer}>
							{
								categoryColors.map((color) =>
									<TouchableHighlight onPress={() => this.setState({ color })}>
										<View style={[{ backgroundColor: color }, styles.colorTile]}>
										{
											(this.state.color && this.state.color === color)
													?
													<View style={[commonStyles.topRightCorner]}>
														<Icon name="check" style={{ color: '#fff', fontSize: 35, padding: 3 }} />
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

				<View style={[commonStyles.flex, styles.fieldContainer]}>
					<ScrollView>
						<View style={[styles.tilesContainer]}>
							{
								Object.keys(iconNames).map((iconName) =>
									<TouchableHighlight onPress={() => this.setState({ iconName })}>
										<View style={styles.iconTile} onPress={(iconName)=>this.setState({iconName})}>
											<Icon name={iconName} style={styles.icon} />
											{
												(this.state.iconName && this.state.iconName === iconName)
													? <View style={[commonStyles.topRightCorner]}>
														<Icon name="check" style={{ color: '#333', fontSize: 35, padding: 3 }} />
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
		justifyContent: 'space-between'
	},
	colorTile: {
		width: 65,
		height: 65,
		margin: 2
	},
	icon: {
		fontSize: 35,
		color: '#777',
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
