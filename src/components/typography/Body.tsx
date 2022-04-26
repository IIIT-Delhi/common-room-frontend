import { ITextProps, Text } from 'native-base';

type BodyProps = ITextProps & {
	isSemiBold?: boolean;
};

function Body1({ children, ...props }: BodyProps) {
	return (
		<Text fontSize="18" lineHeight="22" fontWeight="normal" {...props}>
			{children}
		</Text>
	);
}
function Body2({ children, ...props }: BodyProps) {
	return (
		<Text
			fontSize="14"
			lineHeight="20"
			fontWeight="normal"
			color="body.500"
			{...props}
		>
			{children}
		</Text>
	);
}

export { Body1, Body2 };
