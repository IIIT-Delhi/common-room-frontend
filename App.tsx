import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/providers';
import HomeStack from './src/navigation/home';

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<HomeStack />
				</NavigationContainer>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
