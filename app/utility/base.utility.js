import { AsyncStorage } from 'react-native';

export const getItem = (dataItemName, callBack) => {
	return AsyncStorage.getItem(dataItemName, (err, data) => {

		if (data && typeof data == 'string') {
			callBack(err, JSON.parse(data));
		}
		else {
			callBack(err, null);
		}
	});
};

export const setItem = (dataItemName, data, callBack) => {
	var dataItem = null;
	if (data) {
		dataItem = data;
	}
	return AsyncStorage.setItem(dataItemName, JSON.stringify(data), (err, data) => {
		if (callBack) {
			if (data && typeof data == 'string') {
				callBack(err, JSON.parse(data));
			}
			else {
				callBack(err, null);
			}
		}
	});
};
