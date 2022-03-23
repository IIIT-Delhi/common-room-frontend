import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, AuthProvider } from './src/providers';
import MainNavigation from './src/navigation/main';

export default function App() {
	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<AuthProvider>
						<MainNavigation />
					</AuthProvider>
				</NavigationContainer>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
