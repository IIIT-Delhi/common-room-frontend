import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClubScreen, EventScreen, FeedScreen } from '../../../screens';
import type FeedStackParamsList from './types';

const Stack = createNativeStackNavigator<FeedStackParamsList>();

function FeedStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Feed" component={FeedScreen} />
			<Stack.Screen name="Event" component={EventScreen} />
			<Stack.Screen name="Club" component={ClubScreen} />
		</Stack.Navigator>
	);
}

export default FeedStack;
