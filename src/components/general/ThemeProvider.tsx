import React from 'react';
import { useFonts } from 'expo-font';

import {
	Outfit_100Thin,
	Outfit_200ExtraLight,
	Outfit_300Light,
	Outfit_400Regular,
	Outfit_500Medium,
	Outfit_600SemiBold,
	Outfit_700Bold,
	Outfit_800ExtraBold,
	Outfit_900Black,
} from '@expo-google-fonts/outfit';
import {
	extendTheme,
	NativeBaseProvider,
	Spinner,
	themeTools,
} from 'native-base';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';

const fontConfig = {
	Outfit: {
		100: {
			normal: 'Outfit_100Thin',
			italic: 'Outfit_100Thin_Italic',
		},
		200: {
			normal: 'Outfit_200ExtraLight',
			italic: 'Outfit_200ExtraLight_Italic',
		},
		300: {
			normal: 'Outfit_300Light',
			italic: 'Outfit_300Light_Italic',
		},
		400: {
			normal: 'Outfit_400Regular',
			italic: 'Outfit_400Regular_Italic',
		},
		500: {
			normal: 'Outfit_500Medium',
			italic: 'Outfit_500Medium_Italic',
		},
		600: {
			normal: 'Outfit_600SemiBold',
			italic: 'Outfit_600SemiBold_Italic',
		},
		700: {
			normal: 'Outfit_700Bold',
			italic: 'Outfit_700Bold_Italic',
		},
		800: {
			normal: 'Outfit_800ExtraBold',
			italic: 'Outfit_800ExtraBold_Italic',
		},
		900: {
			normal: 'Outfit_900Black',
			italic: 'Outfit_900Black_Italic',
		},
	},
};

const fonts = {
	heading: 'Outfit',
	body: 'Outfit',
	mono: 'Outfit',
};

const colors = {
	primary: {
		50: '#CCEAF8',
		100: '#CCEAF8',
		200: '#99D5F1',
		300: '#66C0E9',
		400: '#33ABE2',
		500: '#0096DB',
		600: '#0078AF',
		700: '#005A83',
		800: '#003C58',
		900: '#001E2C',
	},
	bg: {
		500: '#111111',
	},
};
const components = {
	Button: {
		baseStyle: {
			rounded: 'lg',
			colorScheme: 'primary',
		},
		defaultProps: {
			colorScheme: 'primary',
			variant: 'solid',
		},
	},
	IconButton: {
		baseStyle: {
			rounded: 'sm',
		},
		variants: {
			outline: {
				borderColor: 'primary.500',
				borderWidth: '1',
			},
		},
		defaultProps: {
			colorScheme: 'primary',
		},
	},
	Heading: {
		baseStyle: (props: any) => ({
			color: themeTools.mode('primary.500', 'white')(props),
		}),
		defaultProps: { size: 'xl' },
		variants: {},
		sizes: {},
	},
};

const theme = extendTheme({
	fontConfig,
	fonts,
	colors,
	components,
	config: {
		initialColorMode: 'dark',
	},
});

export default function ThemeProvider({ children }: any) {
	const [fontsLoaded] = useFonts({
		Outfit_100Thin,
		Outfit_200ExtraLight,
		Outfit_300Light,
		Outfit_400Regular,
		Outfit_500Medium,
		Outfit_600SemiBold,
		Outfit_700Bold,
		Outfit_800ExtraBold,
		Outfit_900Black,
	});
	return fontsLoaded ? (
		<NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
	) : (
		<AppLoading />
	);
}
