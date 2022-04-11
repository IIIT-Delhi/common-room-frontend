import { Box, ScrollView, StatusBar, useTheme } from 'native-base';
import { useState } from 'react';
import { RefreshControl, ScrollViewProps } from 'react-native';
import { useQueryClient } from 'react-query';

type ParentScrollContainerProps = ScrollViewProps & {
	noHorizontalPadding?: boolean;
	contentUnderStatusBar?: boolean;
};

function ParentScrollContainer({
	children,
	showsVerticalScrollIndicator = true,
	noHorizontalPadding = false,
	contentUnderStatusBar = false,
	...props
}: ParentScrollContainerProps) {
	const { colors } = useTheme();

	const [refreshing, setRefreshing] = useState(false);
	const queryClient = useQueryClient();
	const onRefresh = async () => {
		setRefreshing(true);
		await queryClient.invalidateQueries();
		setRefreshing(false);
	};

	return (
		<Box flex="1">
			<StatusBar
				barStyle="light-content"
				backgroundColor={
					contentUnderStatusBar ? 'transparent' : colors.bg['500']
				}
				translucent={contentUnderStatusBar}
			/>
			<ScrollView
				bg="bg.500"
				px={noHorizontalPadding ? '0' : '4'}
				{...props}
				contentContainerStyle={{
					paddingBottom: 40,
				}}
				showsVerticalScrollIndicator={showsVerticalScrollIndicator}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{children}
			</ScrollView>
		</Box>
	);
}

export default ParentScrollContainer;
