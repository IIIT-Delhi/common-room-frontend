import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';

const TOKEN_KEY = 'token';
const EMAIL_KEY = 'email';

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

export async function getEmail() {
	return SecureStore.getItemAsync(EMAIL_KEY);
}

export async function setEmail(value: string) {
	return SecureStore.setItemAsync(EMAIL_KEY, value);
}

export async function clearEmail() {
	return SecureStore.deleteItemAsync(EMAIL_KEY);
}
