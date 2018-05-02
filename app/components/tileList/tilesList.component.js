import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { commonStyles } from '../../commonModules';

export const TileListComponent = (props) => {
	return (
		<View style={[commonStyles.flex, commonStyles.borderAll]}>
			<FlatList
				contentContainerStyle={[styles.tilesContainer]}
				data={props.data}
				keyExtractor={(item, index) => index}
				renderItem={props.renderItem}
				onEndReached={props.onEndReached}
				onEndReachedThreshold={0.5}
				numColumns={props.numColumns}
				horizontal={false}
				ListFooterComponent={() =>
					props.loading ? <ActivityIndicator size='large' animating /> : null
				}
			>
			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	tilesContainer: {
		padding: 3,
		justifyContent: 'flex-start'
	}
});
