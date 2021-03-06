import 'dotenv/config';

export default {
	expo: {
		name: 'Common Room',
		slug: 'common-room',
		scheme: 'common-room',
		version: '1.0.2',
		orientation: 'portrait',
		icon: './src/assets/icon.png',
		primaryColor: '#111111',
		backgroundColor: '#111111',
		androidStatusBar: {
			barStyle: 'light-content',
			backgroundColor: '#111111',
		},
		splash: {
			image: './src/assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#111111',
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: false,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './src/assets/adaptive-icon.png',
				backgroundColor: '#111111',
			},
			package: 'com.lemon8.commonroom',
			googleServicesFile: './google-services.json',
		},
		web: {
			favicon: './src/assets/favicon.png',
		},
		androidNavigationBar: {
			backgroundColor: '#111111',
		},
		extra: {
			API_URL: process.env.API_URL,
		},
	},
};
