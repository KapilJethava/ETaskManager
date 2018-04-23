import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const HeaderButton = (props) => {
	return (
		<TouchableOpacity onPress={() => props.onPress() }>
			<View style={styles.headerButton}>
				<Text style={{ color: '#fff' }} > ADD </Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	headerButton: {
		borderWidth: 1,
		borderColor: '#dedede',
		borderRadius: 2,
		padding: 4,
		marginRight: 10,
		backgroundColor: 'transparent'
	}
});

