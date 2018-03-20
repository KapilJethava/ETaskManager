import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { RootNavigator } from './app/navigators/RootNavigator';
//import { TasksComponent } from './app/screens';


export default class App extends React.Component<{}> {
	render() {
		return (
			<Provider store={store}>
				<RootNavigator />
			</Provider>
		);
	}
}
