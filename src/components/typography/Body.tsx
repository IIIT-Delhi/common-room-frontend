import { Text } from 'native-base';

function Body1({ children, ...props }: any) {
	return (
		<Text {...props} fontSize="18" lineHeight="22" fontWeight="normal">
			{children}
		</Text>
	);
}
function Body2({ children, ...props }: any) {
	return (
		<Text
			{...props}
			fontSize="14"
			lineHeight="20"
			fontWeight="normal"
			color="body.500"
		>
			{children}
		</Text>
	);
}

export { Body1, Body2 };
