import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/providers';
import HomeStack from './src/navigation/home';
import { EventScreen } from './src/screens';

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					{/* <HomeStack /> */}
					<EventScreen />
				</NavigationContainer>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
