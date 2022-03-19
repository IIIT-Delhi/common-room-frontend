import { useTheme } from 'native-base';
import React from 'react';
import { SquircleView } from 'react-native-figma-squircle';

export default function SquircleCard({ children }: any) {
	const { colors } = useTheme();
	return (
		<SquircleView
			squircleParams={{
				cornerSmoothing: 1,
				cornerRadius: 10,
				fillColor: colors.bg['400'],
			}}
			style={{
				width: '100%',
				minHeight: 20,
				padding: 8,
			}}
		>
			{children}
		</SquircleView>
	);
}
