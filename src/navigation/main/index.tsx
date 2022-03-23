import AppLoading from 'expo-app-loading';
import HomeStack from '../home';
import LoginStack from '../auth';
import { useAuth } from '../../hooks';

function MainNavigation() {
	const { authData, isLoading } = useAuth();
	const { token } = authData;

	if (isLoading) return <AppLoading />;

	return token ? <HomeStack /> : <LoginStack />;
}

export default MainNavigation;
