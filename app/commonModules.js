/**
 * Purpose of this file is to change commont things
 * like icons and stylesheet from single place for all modules
 */
import { commonStyles } from './assets/styles/sharedStyles';
import {
	colorsForGroups,
	globalTokens,
	iconNames,
	layoutAttrib,
	priorityEnum,
	styleConstant
	} from './assets/content';
import * as Utility from './utility';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

const iconList = _.clone(Object.keys(iconNames));

export {
	_,
	colorsForGroups,
	commonStyles,
	globalTokens,
	Icon,
	iconList,
	layoutAttrib,
	priorityEnum,
	styleConstant,
	Utility
}
