import AppLoading from 'expo-app-loading';
import HomeStack from '../home';
import LoginStack from '../auth';
import { useAuth } from '../../hooks';
import { InterestsScreen } from '../../screens';

function MainNavigation() {
	const { authData, isLoading } = useAuth();
	const { token, isOnBoarded } = authData;

	if (isLoading) return <AppLoading />;
	if (token) {
		return isOnBoarded ? <HomeStack /> : <InterestsScreen />;
	}
	return <LoginStack />;
}

export default MainNavigation;
