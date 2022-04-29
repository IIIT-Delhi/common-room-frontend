import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClubScreen, EventScreen, ExploreScreen } from '../../../screens';
import type ExploreStackParamsList from './types';

const Stack = createNativeStackNavigator<ExploreStackParamsList>();

function ExploreStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Explore" component={ExploreScreen} />
			<Stack.Screen name="Event" component={EventScreen} />
			<Stack.Screen name="Club" component={ClubScreen} />
		</Stack.Navigator>
	);
}

export default ExploreStack;
