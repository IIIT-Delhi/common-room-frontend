import React, { useState } from 'react';
import { Box, ScrollView, StatusBar, useTheme } from 'native-base';
import { Platform, RefreshControl } from 'react-native';

type ParentScrollContainerProps = {
	children: any;
	props?: any;
	showsVerticalScrollIndicator?: boolean;
};

const ParentScrollContainer = ({
	children,
	showsVerticalScrollIndicator = true,
	...props
}: ParentScrollContainerProps) => {
	const { colors } = useTheme();
	const [refreshing, setRefreshing] = useState(false);

	return (
		<Box flex="1">
			<StatusBar barStyle="light-content" backgroundColor={colors.bg['500']} />
			<ScrollView
				bg="bg.500"
				mt={Platform.OS === 'android' ? StatusBar.currentHeight : 0}
				pt="8"
				px="8"
				{...props}
				contentContainerStyle={{
					paddingBottom: 100,
				}}
				showsVerticalScrollIndicator={showsVerticalScrollIndicator}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={() => null} />
				}
			>
				{children}
			</ScrollView>
		</Box>
	);
};
export default ParentScrollContainer;
