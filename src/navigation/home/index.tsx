/* eslint-disable react/no-unstable-nested-components */

import { useTheme } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RemixIcon } from '../../components/general';
import {
	AccountScreen,
	FeedScreen,
	NotificationsScreen,
	SearchScreen,
} from '../../screens';

const Tab = createBottomTabNavigator();

function BottomTabs() {
	const { colors } = useTheme();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.bg['500'],
					height: 65,
					paddingBottom: 5,
					paddingTop: 5,
					elevation: 0, // remove shadow on Android
					shadowOpacity: 0, // remove shadow on iOS
					borderTopColor: '#1e1e1e',
					borderTopWidth: 2,
				},
				tabBarIcon: ({ focused }) => {
					const icons: { [key: string]: string } = {
						Feed: 'home-2',
						Notifications: 'notification-2',
						Explore: 'search-2',
						Account: 'account-circle',
					};
					return (
						<RemixIcon
							key={`remix-${route.name}`}
							name={`${icons[route.name]}-${
								focused ? 'fill' : 'line'
							}`}
							size="7"
							color={focused ? 'primary.500' : 'subtle.500'}
						/>
					);
				},
				tabBarShowLabel: false,
			})}
		>
			<Tab.Screen name="Feed" component={FeedScreen} />
			<Tab.Screen name="Notifications" component={NotificationsScreen} />
			<Tab.Screen name="Explore" component={SearchScreen} />
			<Tab.Screen name="Account" component={AccountScreen} />
		</Tab.Navigator>
	);
}

export default BottomTabs;
