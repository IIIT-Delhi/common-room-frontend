import { LogBox } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, AuthProvider, UrqlProvider } from './src/providers';
import MainNavigation from './src/navigation/main';

LogBox.ignoreLogs(['Setting a timer']);

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
