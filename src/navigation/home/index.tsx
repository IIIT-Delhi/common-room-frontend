/* eslint-disable react/no-unstable-nested-components */

import { useTheme } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	useSafeAreaFrame,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { RemixIcon } from '../../components/general';
import {
	AccountScreen,
	NotificationsScreen,
	ExploreScreen,
} from '../../screens';
import FeedStack from './feed';
import type HomeBottomTabsParamList from './types';
import { registerForPushNotificationsAsync } from '../../utils';
import { useUpdateUserMutation } from '../../generated/graphql';
import { useAuthData } from '../../hooks/auth';

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

function BottomTabs() {
	const { colors } = useTheme();
	const insets = useSafeAreaInsets();
	const frame = useSafeAreaFrame();
	const updateUser = useUpdateUserMutation();
	const authData = useAuthData();
	useEffect(() => {
		const registerExpoToken = async () => {
			const expoToken = await registerForPushNotificationsAsync();
			console.log('Expo Token', expoToken);
			if (expoToken) {
				updateUser.mutate({
					data: {
						expoToken: { set: expoToken },
					},
					where: {
						id: authData.id,
					},
				});
			}
		};
		registerExpoToken();
	}, []);
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.bg['500'],
					height: frame.height * 0.08 + insets.bottom - 10,
					paddingBottom: insets.bottom ? insets.bottom : 8,
					paddingTop: 5,
					elevation: 0, // remove shadow on Android
					shadowOpacity: 0, // remove shadow on iOS
					borderTopColor: '#1e1e1e',
					borderTopWidth: 2,
				},
				tabBarIcon: ({ focused }) => {
					const icons: { [key: string]: string } = {
						Home: 'home-2',
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
			<Tab.Screen name="Home" component={FeedStack} />
			{/* <Tab.Screen name="Feed" component={FeedScreen} /> */}
			<Tab.Screen name="Notifications" component={NotificationsScreen} />
			<Tab.Screen name="Explore" component={ExploreScreen} />
			<Tab.Screen name="Account" component={AccountScreen} />
		</Tab.Navigator>
	);
}

export default BottomTabs;
