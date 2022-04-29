import { Box, FlatList, StatusBar, useTheme } from 'native-base';
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
				<FlatList
					data={[]}
					listKey="parent-scroll-container"
					renderItem={() => null}
					bg="bg.500"
					// px={noHorizontalPadding ? '0' : '4'}
					{...props}
					// contentContainerStyle={{
					// 	paddingBottom: 40,
					// }}
					showsVerticalScrollIndicator={showsVerticalScrollIndicator}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
					nestedScrollEnabled
					// eslint-disable-next-line react/jsx-no-useless-fragment
					ListFooterComponent={<>{children}</>}
					_contentContainerStyle={{
						px: noHorizontalPadding ? '0' : '4',
						// mx: noHorizontalPadding,
						pb: '5',
					}}
				/>
			</Box>
		</SafeAreaView>
	);
}

export default ParentScrollContainer;
