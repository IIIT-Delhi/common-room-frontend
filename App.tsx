import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider, AuthProvider, UrqlProvider } from './src/providers';
import MainNavigation from './src/navigation/main';

const queryClient = new QueryClient();

export default function App() {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<UrqlProvider>
						<MainNavigation />
					</UrqlProvider>
				</AuthProvider>
			</QueryClientProvider>
		</ThemeProvider>
	);
}
