import { Box, ScrollView, StatusBar, useTheme } from 'native-base';
import { RefreshControl, ScrollViewProps } from 'react-native';

type ParentScrollContainerProps = ScrollViewProps & {
	noHorizontalPadding?: boolean;
};

function ParentScrollContainer({
	children,
	showsVerticalScrollIndicator = true,
	noHorizontalPadding = false,
	...props
}: ParentScrollContainerProps) {
	const { colors } = useTheme();
	const refreshing = false;

	return (
		<Box flex="1">
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.bg['500']}
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
						onRefresh={() => null}
					/>
				}
			>
				{children}
			</ScrollView>
		</Box>
	);
}

export default ParentScrollContainer;
