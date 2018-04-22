import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const LoadingIndicator = (props) => {
	return (
		<View style={styles.activityIndicatorContainer}>
			<ActivityIndicator
				animating={true}
				style={[{ height: props.height || 80 }]}
				size={props.size || 'large'}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	activityIndicatorContainer: {
		backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
});
