import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { BottomTab } from './components/BottomTab';
import SignUpLoginScreen from './screens/SignUpLoginScreen';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<AppContainer />
		</View>
	);
}
const AppNavigator = createSwitchNavigator({
	FirstScreen: SignUpLoginScreen,
	SecondScreen: BottomTab,
});

const AppContainer = createAppContainer(AppNavigator);
