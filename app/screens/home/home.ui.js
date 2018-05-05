import React from 'react';
import { Dimensions, View, Text, Animated } from 'react-native';
import { styles } from './home.style';
import { HomeBusiness } from './home.business';
import { commonStyles, styleConstant, Icon } from '../../commonModules';

export class HomeUI extends HomeBusiness {
	orientationChanged(e) {
		const { width, height } = Dimensions.get('window')
		isLandScape = width >= height;

		this.setState({ isLandScape });
	}

	expandCollapse() {
		let initialValue = this.state.expanded ? 0 : 1;
		finalValue = this.state.expanded ? 1 : 0;

		this.setState({
			expanded: !this.state.expanded  //Step 2
		});

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
	}

	render() {
		const groupsExpanded = this.state.expanded;
		var iconContainer;
		if (this.state.isLandScape) {
			iconContainer = groupsExpanded ? styles.landscapeExpanded : styles.landscapeCollapsed;
		} else {
			iconContainer = groupsExpanded ? styles.portraitExpanded : styles.portraitCollapsed;
		}
		console.log(groupsExpanded);

		var groupFlex = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 3]
		});
		var taskFlex = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 9]
		})
		var spin = this.state.isLandScape ? this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['90deg', '270deg']
		}) : this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['180deg', '0deg']
		});

		return (
			<View style={[commonStyles.flex, { flexDirection: this.state.isLandScape ? 'row-reverse' : 'column-reverse' }]}
				onLayout={this.orientationChanged.bind(this)}>
				<Animated.View style={[{ flex: taskFlex, backgroundColor: 'yellow' }]}>

				</Animated.View>
				<Animated.View style={[{ flex: groupFlex, backgroundColor: 'white' }]}>
				<Text>{iconContainer}</Text>
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
