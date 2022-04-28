import { Platform, Alert } from 'react-native';
import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { AuthData } from '../providers/types';

const TOKEN_KEY = 'token';
const AUTH_KEY = 'auth';

export const BASE_URL = Constants?.manifest?.extra?.API_URL;

export async function getToken() {
	return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function setToken(value: string) {
	return SecureStore.setItemAsync(TOKEN_KEY, value);
}

export async function clearToken() {
	return SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function getAuthData(): Promise<AuthData | null> {
	const authData = await SecureStore.getItemAsync(AUTH_KEY);
	return authData ? (JSON.parse(authData) as AuthData) : null;
}

export async function setAuthData(value: AuthData) {
	return SecureStore.setItemAsync(AUTH_KEY, JSON.stringify(value));
}

export async function clearAuthData() {
	clearToken();
	return SecureStore.deleteItemAsync(AUTH_KEY);
}

export async function registerForPushNotificationsAsync() {
	let token;
	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			Alert.alert(
				'Permission Denied 🚫',
				'Failed to get push token for push notification!',
			);
			return null;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
	}

	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C',
		});
	}
	return token;
}
