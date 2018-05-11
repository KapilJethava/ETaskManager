import React from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { commonStyles, styleConstant, Icon } from '../../commonModules';

export class ExpandCollapse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animation: new Animated.Value(0)
		}
	}

	expandCollapse() {
		let initialValue = this.props.expanded ? 0 : 1;
		finalValue = this.props.expanded ? 1 : 0;

		this.props.onButtonClicked(!this.props.expanded);

		this.state.animation.setValue(initialValue);  //Step 3
		Animated.spring(//Step 4
			this.state.animation,
			{
				toValue: finalValue
			}
		).start();  //Step 5
	}

	componentDidMount() {
		this.expandCollapse();
		this.props.onRef(this)
	}
	componentWillUnmount() {
		this.props.onRef(undefined)
	}

	render() {
		const groupsExpanded = this.props.expanded;
		var groupFlex, iconContainer, spin, taskFlex;
		if (this.props.isLandScape) {
			iconContainer = groupsExpanded ? styles.landscapeExpanded : styles.landscapeCollapsed;
			spin = this.state.animation.interpolate({
				inputRange: [0, 1],
				outputRange: ['90deg', '270deg']
			});
		} else {
			iconContainer = groupsExpanded ? styles.portraitExpanded : styles.portraitCollapsed;
			spin = this.state.animation.interpolate({
				inputRange: [0, 1],
				outputRange: ['180deg', '0deg']
			});
		}

		groupFlex = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 3]
		});
		taskFlex = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 9]
		})

		return (
			<View style={[commonStyles.flex, { flexDirection: this.props.isLandScape ? 'row-reverse' : 'column-reverse' }]} >
				<Animated.View style={[{ flex: taskFlex, backgroundColor: 'yellow' }]}>
					{groupsExpanded?null:this.props.renderFrame2()}
				</Animated.View>
				<Animated.View style={[{ flex: groupFlex, backgroundColor: 'white' }]}>
					{this.props.renderFrame1()}
					<Animated.View style={[styles.iconContainer, iconContainer, { transform: [{ rotate: spin }] }]}>
						<Icon name="arrow-drop-down-circle"
							style={[styles.icon]}
							onPress={() => this.expandCollapse()} />
					</Animated.View>
				</Animated.View>
			</View>
		)
	}
}
export const styles = StyleSheet.create({
	iconContainer: {
		position: 'absolute',
		backgroundColor: 'transparent'
	},
	landscapeExpanded: {
		bottom: 12,
		right: 0
	},
	landscapeCollapsed: {
		bottom: 12,
		right: -20
	},
	portraitExpanded: {
		bottom: 0,
		right: 10
	},
	portraitCollapsed: {
		bottom: -18,
		right: 10
	},
	icon: {
		fontSize: 35,
		color: styleConstant.themeColor,
		alignSelf: 'center',
		borderRadius: 18
	},
});
