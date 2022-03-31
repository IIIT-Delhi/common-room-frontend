import { ThemeProvider, AuthProvider } from './src/providers';
import MainNavigation from './src/navigation/main';

export default function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<MainNavigation />
			</AuthProvider>
		</ThemeProvider>
	);
}
