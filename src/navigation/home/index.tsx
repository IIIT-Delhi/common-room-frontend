/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Icon, useTheme } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RemixIcon } from '../../components/general';
import { FeedScreen, NotificationsScreen } from '../../screens';

const Tab = createBottomTabNavigator();

function BottomTabs() {
	const { colors } = useTheme();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.bg['500'],
				},
			}}
		>
			<Tab.Screen
				name="Feed"
				component={FeedScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused, color, size }) => (
						<Icon
							as={RemixIcon}
							name={`home-2-${focused ? 'fill' : 'line'}`}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={NotificationsScreen}
				options={{
					tabBarLabel: 'Notifications',
					tabBarIcon: ({ focused, color, size }) => (
						<Icon
							as={RemixIcon}
							name={`notification-2-${focused ? 'fill' : 'line'}`}
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabs;
