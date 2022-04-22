import { Box, ScrollView, StatusBar, useTheme } from 'native-base';
import { useState } from 'react';
import { RefreshControl, ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
	const queryClient = useQueryClient();
	const [refreshing, setRefreshing] = useState(false);
	const onRefresh = async () => {
		setRefreshing(true);
		await queryClient.invalidateQueries();
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
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
					nestedScrollEnabled
				>
					{children}
				</ScrollView>
			</Box>
		</SafeAreaView>
	);
}

export default ParentScrollContainer;
