import React from 'react';
import { FeedScreen } from './src/components/screens';
import ThemeProvider from './src/components/general/ThemeProvider';

export default function App() {
	return (
		<ThemeProvider>
			<FeedScreen />
		</ThemeProvider>
	);
}
