/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Icon, useTheme } from 'native-base';
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
					const icons = {
						Feed: focused ? 'ri-home-2-fill' : 'ri-home-2-line',
						Notifications: focused
							? 'ri-notification-2-fill'
							: 'ri-notification-2-line',
						Explore: focused
							? 'ri-search-2-fill'
							: 'ri-search-2-line',
						Account: focused
							? 'ri-account-circle-fill'
							: 'ri-account-circle-line',
					};
					const iconName = icons[route.name];
					const size = focused ? '7' : '7';
					return (
						<Icon
							as={RemixIcon}
							key={iconName}
							name={iconName}
							size={size}
							color={focused ? 'primary.500' : 'subtle.500'}
						/>
					);
				},
				tabBarLabel: () => null,
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
