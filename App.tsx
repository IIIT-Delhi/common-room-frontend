import { LogBox } from 'react-native';
import { setNotificationHandler } from 'expo-notifications';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, AuthProvider, UrqlProvider } from './src/providers';
import MainNavigation from './src/navigation/main';

LogBox.ignoreLogs(['Setting a timer']);

setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const queryClient = new QueryClient();

export default function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<QueryClientProvider client={queryClient}>
					<UrqlProvider>
						<MainNavigation />
					</UrqlProvider>
				</QueryClientProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
