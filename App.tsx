import React from 'react';
import { FeedScreen } from './src/screens';
import ThemeProvider from './src/components/general/ThemeProvider';

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
};

export default function App() {
	return (
		<ThemeProvider>
			<FeedScreen />
		</ThemeProvider>
	);
}
