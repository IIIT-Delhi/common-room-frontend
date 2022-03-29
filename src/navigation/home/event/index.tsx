import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClubScreen, EventScreen } from '../../../screens';
import ClubEventNativeStackParamList from './types';

const Stack = createNativeStackNavigator<ClubEventNativeStackParamList>();

function EventStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Event" component={EventScreen} />
			<Stack.Screen name="Club" component={ClubScreen} />
		</Stack.Navigator>
	);
}

export default EventStack;
